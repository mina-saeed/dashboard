import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { ChartsModule } from 'ng2-charts';
import { NgxPaginationModule } from 'ngx-pagination';

import { userGuard } from '../guards/user.guard'
import { users } from '../shared/users.service'
import { pharmacy } from '../shared/pharmacy.service'
import { deactivateGuard } from '../guards/deactivate.guard'

import { home } from '../components/home/home.component'
import { login } from '../components/login/login.component'
import { forgetpassword } from '../components/forget/forgetpassword.component'
import { reset } from '../components/forget/reset.component'
import { logout } from '../components/logout/logout.component'
import { medicines } from '../components/medicines/medicines.component'
import { newMedicine } from '../components/medicines/newMedicine.component'
import { products } from '../components/products/products.component'
import { productDialog } from '../components/products/dialog.component'
import { newProduct } from '../components/products/newProduct.component'
import { updateProduct } from '../components/products/updateProduct.component'
import { categories } from '../components/categories/categories.component'
import { newCategory } from '../components/categories/newCategory.component'
import { updateCategory } from '../components/categories/updateCategory.component'
import { productCategory } from '../components/productCategory/productCategory.component'
import { newProductCategory } from '../components/productCategory/newProductCategory.component'
import { updateProductCategory } from '../components/productCategory/updateProductCategory.component'
import { allusers } from '../components/allusers/allusers.component'
import { sidebar } from '../components/sidebar/sidebar.component'
import { topnav } from '../components/sidebar/topnav.component'
import { AllpharmacyComponent } from '../components/allpharmacy/allpharmacy.component';
import { productSubcategory } from '../components/productSubcategory/productSubcategory.component'
import { newproductSubcategory } from '../components/productSubcategory/newproductSubcategory.component'
import { updateproductSubcategory } from '../components/productSubcategory/updateproductSubcategory.component'
import { LineChartDemoComponent } from '../components/chart/chart.component'
import { locations } from '../components/locations/locations.component'
import { updatemedicine } from '../components/medicines/updatemedicine.component'
import { newAds } from '../components/ads/addAds.component'
import { Ads } from '../components/ads/Ads.component'
import { addpromo } from '../components/promotion/addpromo.component'
import { promos } from '../components/promotion/promos.component'
import { updatepromo } from '../components/promotion/updatepromo.component'
const componentRoutes: Routes = [

	{
		path: 'home',
		component: home,
		canActivate: [userGuard]
	},
	{
		path: 'login',
		component: login,
		canActivate: [deactivateGuard]
	},
	{
		path: '',
		component: login,
		canActivate: [deactivateGuard]
	},

	{
		path: 'logout',
		component: logout,
		canActivate: [userGuard]
	},
	{
		path: 'medicines',
		component: medicines,
		canActivate: [userGuard]
	},
	{
		path: 'newMedicine',
		component: newMedicine,
		canActivate: [userGuard]
	},
	{
		path: 'products',
		component: products,
		canActivate: [userGuard]
	},
	{
		path: 'newproduct',
		component: newProduct,
		canActivate: [userGuard]
	},
	{
		path: 'medicineCategory',
		component: categories,
		canActivate: [userGuard]
	},
	{
		path: 'newCategory',
		component: newCategory,
		canActivate: [userGuard]
	},
	{
		path: 'productCategory',
		component: productCategory,
		canActivate: [userGuard]
	},
	{
		path: 'newProductCategory',
		component: newProductCategory,
		canActivate: [userGuard]
	},
	{
		path: 'users',
		component: allusers,
		canActivate: [userGuard]
	},
	{
		path: 'pharmacies',
		component: AllpharmacyComponent,
		canActivate: [userGuard]

	},
	{
		path: 'productsubCategory/:id',
		component: productSubcategory,
		canActivate: [userGuard]
	},
	{
		path: 'newproductsubCategory/:id',
		component: newproductSubcategory,
		canActivate: [userGuard]
	},
	{
		path: 'chart',
		component: LineChartDemoComponent,
		canActivate: [userGuard]

	},
	{
		path: 'locations',
		component: locations,
		canActivate: [userGuard]
	},
	{
		path: 'updateMedicine',
		component: updatemedicine,
		canActivate: [userGuard],
	},
	{
		path: 'updateProduct',
		component: updateProduct,
		canActivate: [userGuard],
	},
	{
		path: 'updateCategory',
		component: updateCategory,
		canActivate: [userGuard]
	},
	{
		path: 'updateProductCategory',
		component: updateProductCategory,
		canActivate: [userGuard]
	},
	{
		path: 'updateproductsubCategory',
		component: updateproductSubcategory,
		canActivate: [userGuard]
	},
	{
		path: 'addAds',
		component: newAds,
		canActivate: [userGuard]
	},
	{
		path: 'allAds',
		component: Ads,
		canActivate: [userGuard]

	},
	{
		path: 'addpromo',
		component: addpromo,
		canActivate: [userGuard]
	},
	{
		path: 'promos',
		component: promos,
		canActivate: [userGuard]
	},
	{
		path: 'updatepromo',
		component: updatepromo,
		canActivate: [userGuard]
	},
	{
		path: 'forgetpassword',
		component: forgetpassword,
		canActivate: [deactivateGuard]
	},
	{
		path: 'reset/:email',
		component: reset,
		canActivate: [deactivateGuard]
	}

]


@NgModule({

	imports: [
		RouterModule.forRoot(componentRoutes), ChartsModule, NgxPaginationModule

	],

	providers: [
		userGuard, users, deactivateGuard, pharmacy
	],
	exports: [
		RouterModule
	],
	entryComponents: [
		productDialog
	],
})
export class routes { }
export const RoutingComponents = [
	home,
	login,
	logout,
	medicines,
	newMedicine,
	products,
	newProduct,
	categories,
	newCategory,
	productCategory,
	newProductCategory,
	allusers,
	sidebar,
	topnav,
	AllpharmacyComponent,
	productSubcategory,
	newproductSubcategory,
	LineChartDemoComponent,
	locations,
	updatemedicine,
	updateProduct,
	updateCategory,
	updateProductCategory,
	updateproductSubcategory,
	newAds,
	Ads,
	addpromo,
	promos,
	updatepromo,
	forgetpassword,
	reset
]