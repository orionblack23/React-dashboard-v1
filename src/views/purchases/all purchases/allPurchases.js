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
          <CTableHeaderCell scope="col">Date</CTableHeaderCell>
          <CTableHeaderCell scope="col">Order No.</CTableHeaderCell>
          <CTableHeaderCell scope="col">Supplier</CTableHeaderCell>
          <CTableHeaderCell scope="col">Order Amount</CTableHeaderCell>
          <CTableHeaderCell scope="col">Discount</CTableHeaderCell>
          <CTableHeaderCell scope="col">Prev. Balance</CTableHeaderCell>
          <CTableHeaderCell scope="col">Bill paid</CTableHeaderCell>
          <CTableHeaderCell scope="col">Balance</CTableHeaderCell>
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
        </CTableRow>
      </CTableBody>
    </CTable>
  )
}

export default Tables
