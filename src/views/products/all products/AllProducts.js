import React from 'react'
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CTable,
  CTableBody,
  CTableCaption,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react'
import { DocsCallout, DocsExample } from 'src/components'

const Tables = () => {
  return (
    <CTable responsive>
      <CTableHead>
        <CTableRow>
          <CTableHeaderCell scope="col">ID</CTableHeaderCell>
          <CTableHeaderCell scope="col">Supplier</CTableHeaderCell>
          <CTableHeaderCell scope="col">Product Name</CTableHeaderCell>
          <CTableHeaderCell scope="col">Purchase Price</CTableHeaderCell>
          <CTableHeaderCell scope="col">Sale Price</CTableHeaderCell>
          <CTableHeaderCell scope="col">Stock</CTableHeaderCell>
          <CTableHeaderCell scope="col">Per Pack</CTableHeaderCell>
          <CTableHeaderCell scope="col">T Purchase Price</CTableHeaderCell>
          <CTableHeaderCell scope="col">T Sale Price</CTableHeaderCell>
          <CTableHeaderCell scope="col">Action</CTableHeaderCell>
        </CTableRow>
      </CTableHead>
      <CTableBody>
        <CTableRow>
          <CTableHeaderCell scope="row">1</CTableHeaderCell>
          <CTableDataCell>Cell</CTableDataCell>
          <CTableDataCell>Cell</CTableDataCell>
          <CTableDataCell>Cell</CTableDataCell>
          <CTableDataCell>Cell</CTableDataCell>
          <CTableDataCell>Cell</CTableDataCell>
          <CTableDataCell>Cell</CTableDataCell>
          <CTableDataCell>Cell</CTableDataCell>
          <CTableDataCell>Cell</CTableDataCell>
          <CTableDataCell>Cell</CTableDataCell>
        </CTableRow>
        <CTableRow>
          <CTableHeaderCell scope="row">2</CTableHeaderCell>
          <CTableDataCell>Cell</CTableDataCell>
          <CTableDataCell>Cell</CTableDataCell>
          <CTableDataCell>Cell</CTableDataCell>
          <CTableDataCell>Cell</CTableDataCell>
          <CTableDataCell>Cell</CTableDataCell>
          <CTableDataCell>Cell</CTableDataCell>
          <CTableDataCell>Cell</CTableDataCell>
          <CTableDataCell>Cell</CTableDataCell>
          <CTableDataCell>Cell</CTableDataCell>
        </CTableRow>
        <CTableRow>
          <CTableHeaderCell scope="row">3</CTableHeaderCell>
          <CTableDataCell>Cell</CTableDataCell>
          <CTableDataCell>Cell</CTableDataCell>
          <CTableDataCell>Cell</CTableDataCell>
          <CTableDataCell>Cell</CTableDataCell>
          <CTableDataCell>Cell</CTableDataCell>
          <CTableDataCell>Cell</CTableDataCell>
          <CTableDataCell>Cell</CTableDataCell>
          <CTableDataCell>Cell</CTableDataCell>
          <CTableDataCell>Cell</CTableDataCell>
        </CTableRow>
      </CTableBody>
    </CTable>
  )
}

export default Tables
