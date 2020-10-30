import { Action, createAction } from "@ngrx/store";
import { Project } from "../../projects/project.model";

export enum ProjectsActionsTypes {
    ProjectSelected = '[Projects] Selected',
    LoadProjects = '[Projects] Load Data',
    ProjectsLoaded = '[Projects] Data Loaded',
    AddProject = '[Projects] Add Data',
    ProjectAdded = '[Projects] Project Added',
    UpdateProject = '[Projects] Update Data',
    ProjectUpdated = '[Projects] Project Updated',
    DeleteProject = '[Projects] Delete Data',
    ProjectDeleted = '[Projects] Project Deleted',
}

export class SelectProject implements Action {
    readonly type = ProjectsActionsTypes.ProjectSelected;
    constructor(public payload: Project) {}
}

export class LoadProjects implements Action {
    readonly type = ProjectsActionsTypes.LoadProjects;
}

export class ProjectsLoaded implements Action {
    readonly type = ProjectsActionsTypes.ProjectsLoaded;
    constructor(public payload: Project[]) {}
}

export class AddProject implements Action {
    readonly type = ProjectsActionsTypes.AddProject;
    constructor(public payload: Project) {}
}

export class ProjectAdded implements Action {
    readonly type = ProjectsActionsTypes.ProjectAdded;
    constructor(public payload: Project) {}
}

export class UpdateProject implements Action {
    readonly type = ProjectsActionsTypes.UpdateProject;
    constructor(public payload: Project) {}
}

export class ProjectUpdated implements Action {
    readonly type = ProjectsActionsTypes.ProjectUpdated;
    constructor(public payload: Project) {}
}

export class DeleteProject implements Action {
    readonly type = ProjectsActionsTypes.DeleteProject;
    constructor(public payload: Project) {}
}

export class ProjectDeleted implements Action {
    readonly type = ProjectsActionsTypes.ProjectDeleted;
    constructor(public payload: Project) {}
}

export type ProjectsActions = SelectProject
    | LoadProjects
    | ProjectsLoaded
    | AddProject
    | ProjectAdded
    | UpdateProject
    | ProjectUpdated
    | DeleteProject
    | ProjectDeleted
    ;
