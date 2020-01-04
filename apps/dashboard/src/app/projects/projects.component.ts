import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import {
  Customer,
  Project,
  NotificationsService,
  CustomersService,
  ProjectsFacade,
} from '@workshop/core-data';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  projects$: Observable<Project[]>;
  customers$: Observable<Customer[]>;
  currentProject$: Observable<Project>;
  currentProject: Project;

  constructor(
    private customerService: CustomersService,
    private projectsFacade: ProjectsFacade,
    private ns: NotificationsService) {
    this.projects$ = projectsFacade.projects$;
    this.currentProject$ = projectsFacade.currentProject$;
  }

  ngOnInit() {
    this.getProjects();
    this.getCustomers();
    this.resetCurrentProject();
  }

  resetCurrentProject() {
    this.projectsFacade.selectProject(null);
  }

  selectProject(project) {
    this.projectsFacade.selectProject(project.id);
  }

  cancel(project) {
    this.resetCurrentProject();
  }

  getCustomers() {
    this.customers$ = this.customerService.all();
  }

  getProjects() {
    this.projectsFacade.getProjects();
  }

  saveProject(project) {
    if (!project.id) {
      this.createProject(project);
    } else {
      this.updateProject(project);
    }
  }

  createProject(project) {
    this.projectsFacade.createProject(project);
    // these will go away
    this.ns.emit('Project created!');
    this.resetCurrentProject();
  }

  updateProject(project) {
    this.projectsFacade.updateProject(project);
    // these will go away
    this.ns.emit('Project saved!');
    this.resetCurrentProject();
  }

  deleteProject(project) {
    this.projectsFacade.deleteProject(project);
    // these will go away
    this.ns.emit('Project deleted!');
    this.resetCurrentProject();
  }
}
