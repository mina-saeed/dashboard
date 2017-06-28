import {NgModule} from '@angular/core'
import {RouterModule ,Routes} from '@angular/router'
import {home} from '../home.component'
import {login} from '../login.component'
import {logout} from '../logout.component'
import {medicines} from '../medicines/medicines.component'
import {newMedicine} from '../medicines/newMedicine.component'
import {products} from '../products/products.component'
import {newProduct} from '../products/newProduct.component'

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
			},
	
			{
				path:'logout',
				component:logout
			},
			{
				path:'medicines',
				component:medicines
			},
			{
				path:'newMedicine',
				component: newMedicine
			},
			{
				path:'products',
				component:products
			},
			{
				path:'newproduct',
				component:newProduct
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
export const RoutingComponents =[home, login , logout , medicines, newMedicine , products, newProduct]