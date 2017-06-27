import {NgModule} from '@angular/core'
import {RouterModule ,Routes} from '@angular/router'
import {home} from '../home.component'
import {login} from '../login.component'

const componentRoutes: Routes =[
	
			{
				path:'home',
				component: home
			},
			{
				path:'login',
				component:login
			},
			{
				path:'',
				component:login
			}
		]


@NgModule({

	imports:[
		RouterModule.forRoot(componentRoutes)
	],
	exports:[
		RouterModule
	]
})
export class routes{}
export const RoutingComponents =[home, login]