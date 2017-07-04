import {NgModule} from '@angular/core'
import {RouterModule ,Routes} from '@angular/router'
import {home} from '../home.component'
import {login} from '../login.component'
import {logout} from '../logout.component'
import {medicines} from '../medicines/medicines.component'
import {newMedicine} from '../medicines/newMedicine.component'
import {products} from '../products/products.component'
import {newProduct} from '../products/newProduct.component'
import {categories} from '../categories/categories.component'
import {newCategory} from '../categories/newCategory.component'
import {productCategory} from '../productCategory/productCategory.component'
import {newProductCategory} from '../productCategory/newProductCategory.component'
import {userGuard} from '../guards/user.guard'
import {users} from '../shared/users.service'
import {deactivateGuard} from '../guards/deactivate.guard'
import {allusers} from '../allusers/allusers.component'

const componentRoutes: Routes =[
	
			{
				path:'home',
				component: home,
				canActivate:[userGuard]
			},
			{
				path:'login',
				component:login,
				canActivate: [deactivateGuard]
			},
			{
				path:'',
				component:login,
				canActivate: [deactivateGuard]
			},
	
			{
				path:'logout',
				component:logout,
				canActivate:[userGuard]
			},
			{
				path:'medicines',
				component:medicines,
				canActivate:[userGuard]			
			},
			{
				path:'newMedicine',
				component: newMedicine,
				canActivate:[userGuard]
			},
			{
				path:'products',
				component:products,
				canActivate:[userGuard]
			},
			{
				path:'newproduct',
				component:newProduct,
				canActivate:[userGuard]
			},
			{
				path:'medicineCategory',
				component:categories,
				canActivate:[userGuard]
			},
			{
				path: 'newCategory',
				component: newCategory,
				canActivate:[userGuard]
			},
			{
				path: 'productCategory',
				component: productCategory,
				canActivate:[userGuard]
			},
			{
				path: 'newProductCategory',
				component: newProductCategory,
				canActivate:[userGuard]
			},
			{
				path: 'users',
				component: allusers,
				canActivate: [userGuard]
			}
		]


@NgModule({

	imports:[
		RouterModule.forRoot(componentRoutes)
	],

	providers: [
		userGuard,users,deactivateGuard
	],
	exports:[
		RouterModule
	]
})
export class routes{}
export const RoutingComponents =[
									home,
									login ,
									logout ,
									medicines,
									newMedicine ,
									products, 
									newProduct ,
									categories,
									newCategory ,
									productCategory,
									newProductCategory,
									allusers
								]