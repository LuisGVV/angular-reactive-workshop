import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/nx';
import { map } from 'rxjs/operators';

import { Project } from './../../projects/project.model';
import { ProjectsService } from './../../projects/projects.service';
import { ProjectsActionsTypes, LoadProjects, ProjectsLoaded, AddProject, ProjectAdded } from './projects.actions';
import { ProjectsState } from './projects.reducer';

@Injectable({ providedIn: 'root' })
export class ProjectsEffects {

    @Effect() loadProjects$ = this.dataPersistence.fetch(
        ProjectsActionsTypes.LoadProjects,
        {
            run: (action: LoadProjects, state: ProjectsState) => {
                return this.projectsService.all().pipe(
                    map((result: Project[]) => new ProjectsLoaded(result))
                )
            },
            onError: () => {},

        }
    )

    @Effect() addProjects$ = this.dataPersistence.pessimisticUpdate(
        ProjectsActionsTypes.AddProject,
        {
            run: (action: AddProject, state: ProjectsState) => {
                return this.projectsService.create(action.payload).pipe(
                    map((result: Project) => new ProjectAdded(result))
                )
            },
            onError: () => {},

        }
    )

    constructor(
        private actions$: Actions,
        private dataPersistence: DataPersistence<ProjectsState>,
        private projectsService: ProjectsService
    ) { }
}