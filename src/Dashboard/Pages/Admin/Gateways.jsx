import React, { useEffect, useState } from 'react'
import { getAllGwsRequest } from '../../../ApiServices/Auth_api'
import GatewaysList from '../../Components/Products_components/GatewaysList'
import FilteredTotalCnt from '../../Components/shared/TotalNumFiltered'

const Gateways = () => {
	const [allgateways, setAllgateways] = useState([])
	const handleGetAllGws = async () => {
		const response = await getAllGwsRequest()
		const gateways = response.gateways
		console.log('FOUND Gateways:::', gateways)

		if (gateways.length === 0 || null) {
			throw new Error('There is no gateways found. :(')
		}

		setAllgateways(gateways)
	}

	useEffect(() => {
		handleGetAllGws()
	}, [])
	return (
		<div className=''>
			<FilteredTotalCnt item={allgateways} itemName={'게이트웨이'} />

			<GatewaysList allgateways={allgateways} />
		</div>
	)
}

export default Gateways
