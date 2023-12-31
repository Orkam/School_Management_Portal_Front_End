import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SignupComponent } from './pages/signup/signup.component';
import { LoginComponent } from './pages/login/login.component';

import { UserDashboardComponent } from './pages/user/user-dashboard/user-dashboard.component';
import { AdminGuard } from './services/admin.guard';
import { NormalGuard } from './services/normal.guard';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { WelcomeComponent } from './pages/admin/welcome/welcome.component';
import { UsersListComponent } from './pages/admin/users-list/users-list.component';
import { ViewCathegoriesComponent } from './pages/admin/view-cathegories/view-cathegories.component';
import { AddCathegoryComponent } from './pages/admin/add-cathegory/add-cathegory.component';
import { ViewAssignmentsComponent } from './pages/admin/view-assignments/view-assignments.component';
import { AddAssessmentComponent } from './pages/admin/add-assessment/add-assessment.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
  },
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'admin',
    component: DashboardComponent,

    canActivate: [AdminGuard],
    children: [
      {
        path: 'profile',
        component: ProfileComponent,
      },
      {
        path: '',
        component: WelcomeComponent,
      },
      {
        path: 'users-list',
        component: UsersListComponent,
      },
      { path: 'categories', component: ViewCathegoriesComponent },
      { path: 'add-category', component: AddCathegoryComponent },
      { path: 'assessments', component: ViewAssignmentsComponent },
      { path: 'add-assessment', component: AddAssessmentComponent },

    ],
  },
  {
    path: 'user-dashboard',
    component: UserDashboardComponent,
    pathMatch: 'full',
    canActivate: [NormalGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
