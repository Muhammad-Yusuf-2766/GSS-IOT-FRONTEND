import React from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css'
import ScrollToTop from './components/Card/window.scroll'
import PrivateClientRoute from './components/PrivateClientRoute'
import PrivateRoute from './components/PrivateRoute'
import ClientDetails from './Dashboard/Components/Client_comp/ClientDetail'
import AuthorizeError from './Dashboard/Components/Errors/Error'
import ActiveProducts from './Dashboard/Components/Home_comp/ActiveProducts'
import DashboardLayout from './Dashboard/Components/Layout'
import { BuildingsProvider } from './Dashboard/Context/BuildingContext'
import { BuildingIoProvider } from './Dashboard/Context/BuildingSocket'
import AddClient from './Dashboard/Pages/Admin/Add_client'
import AddProduct from './Dashboard/Pages/Admin/Add_product'
import Clients from './Dashboard/Pages/Admin/Clients'
import Gateways from './Dashboard/Pages/Admin/Gateways'
import Main from './Dashboard/Pages/Admin/Home'
import NodesLs from './Dashboard/Pages/Admin/Nodes'
import Products from './Dashboard/Pages/Admin/Products'
import Users from './Dashboard/Pages/Admin/Users'
import Buildings from './Dashboard/Pages/Client/buildings'
import BuildingNodes from './Dashboard/Pages/Client/builidngNodes'
import MainClient from './Dashboard/Pages/Client/main'
import Layout from './Layout'
import CommunityPage from './pages/Community'
import Home from './pages/Home/Home'
import MyPage from './pages/My page/my-page'
import DownloadPage from './pages/Recources'
import ServicesPage from './pages/Services'
import DetailedService from './pages/Services/Detailed_service'
import LoginPage from './pages/Signup & Login/Login'
import SignupPage from './pages/Signup & Login/Signup'

function App() {
	return (
		<div className='min-h-screen'>
			<Router>
				<ScrollToTop />
				<Routes>
					{/* Routes for general users */}
					<Route element={<Layout />}>
						<Route path='' element={<Home />} />
						<Route path='/recources' element={<DownloadPage />} />
						<Route path='/services' element={<ServicesPage />} />
						<Route path='/services/:id' element={<DetailedService />} />
						<Route path='/community' element={<CommunityPage />} />
						<Route path='/signup' element={<SignupPage />} />
						<Route path='/login' element={<LoginPage />} />
						<Route path='/my-page' element={<MyPage />} />
					</Route>
					{/* Admin Routes with BuildingsProvider and BuildingIoProvider */}
					<Route
						path='/admin/dashboard'
						element={
							<PrivateRoute allowedRoles={['ADMIN']}>
								<BuildingsProvider>
									<BuildingIoProvider>
										<DashboardLayout />
									</BuildingIoProvider>
								</BuildingsProvider>
							</PrivateRoute>
						}
					>
						<Route path='' element={<Main />} />
						<Route path='add-client' element={<AddClient />} />
						<Route path='add-product' element={<AddProduct />} />
						<Route path='clients' element={<Clients />} />
						<Route path='client/:id' element={<ClientDetails />} />
						<Route path='building/:id' element={<BuildingNodes />} />
						<Route path='users' element={<Users />} />
						<Route path='products' element={<Products />} />
						<Route path='product/gateways' element={<Gateways />} />
						<Route path='product/nodes' element={<NodesLs />} />
						<Route path='statistics-list' element={<ActiveProducts />} />
					</Route>
					{/* Client Routes with BuildingsProvider and BuildingIoProvider */}
					<Route
						path='/client/dashboard'
						element={
							<PrivateClientRoute allowedRoles={['BOSS', 'WORKER']}>
								<BuildingsProvider>
									<BuildingIoProvider>
										<DashboardLayout />
									</BuildingIoProvider>
								</BuildingsProvider>
							</PrivateClientRoute>
						}
					>
						<Route path='' element={<MainClient />} />
						<Route path='buildings' element={<Buildings />} />
						<Route
							path='check-building-nodes/:id'
							element={<BuildingNodes />}
						/>
					</Route>
					<Route path='/unauthorized' element={<AuthorizeError />} />
				</Routes>
			</Router>
		</div>
	)
}

export default App
