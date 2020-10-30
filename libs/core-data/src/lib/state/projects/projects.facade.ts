import { Injectable } from '@angular/core';
import { ActionsSubject, select, Store } from '@ngrx/store';
import { filter } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { Project } from '../../projects/project.model';
import { ProjectsState } from './projects.reducer';
import { selectCurrentProject, selectAllProjects } from '..';
import { LoadProjects, AddProject, UpdateProject, DeleteProject, SelectProject } from './projects.actions';

@Injectable({
    providedIn: 'root'
})
export class ProjectsFacade {
    projects$: Observable<Project[]>;
    currentProject$: Observable<Project>;

    constructor(
        private store: Store<ProjectsState>
    ) {
        this.projects$ = store.pipe(select(selectAllProjects));
        this.currentProject$ = store.pipe(select(selectCurrentProject))
    }

    getProjects() {
        this.store.dispatch(new LoadProjects());
    }

    selectProject(projectId) {
        this.store.dispatch(new SelectProject(projectId));
      }

    createProject(project) {
        this.store.dispatch(new AddProject(project));
    }

    updateProject(project) {
        this.store.dispatch(new UpdateProject(project));
    }

    deleteProject(project) {
        this.store.dispatch(new DeleteProject(project));
    }
}