import Layout from './layout'

import Home from './pages/home'
import Detail from './pages/transaction'

const Routes = [
	{
		path: '/',
		exact: true,
		layout: Layout,
		component: Home,
	},
	{
		path: '/transaction/:id',
		exact: true,
		layout: Layout,
		component: Detail,
	},
]

export default Routes
