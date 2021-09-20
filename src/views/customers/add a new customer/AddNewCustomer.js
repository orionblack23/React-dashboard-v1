import React from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CForm,
  CDropdown,
  CDropdownDivider,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CFormCheck,
  CFormInput,
  CFormLabel,
  CFormSelect,
  CFormTextarea,
  CInputGroup,
  CInputGroupText,
  CRow,
} from '@coreui/react'
import { DocsCallout, DocsExample } from 'src/components'

const Select = () => {
  return (
    <CForm className="row g-3">
      <CCol md={6}>
        <CFormLabel htmlFor="inputName2">Name</CFormLabel>
        <CFormInput placeholder="Name" id="inputName2" />
      </CCol>
      <CCol md={6}>
        <CFormLabel htmlFor="inputSurname2">Surname</CFormLabel>
        <CFormInput placeholder="Surname" id="inputSurname2" />
      </CCol>
      <CCol xs={12}>
        <CFormLabel htmlFor="inputEmail2">Email</CFormLabel>
        <CFormInput type="email" id="inputEmail2" />
      </CCol>
      <CCol xs={12}>
        <CFormLabel htmlFor="inputAddress1">Address</CFormLabel>
        <CFormInput id="inputAddress1" placeholder="Apartment, studio, or floor" />
      </CCol>
      <CCol xs={12}>
        <CFormLabel htmlFor="inputContact2">Contact</CFormLabel>
        <CFormInput id="inputContact2" placeholder="00226 70 00 00 00" />
      </CCol>
      <CCol xs={12}>
        <CButton type="submit">Submit</CButton>
      </CCol>
    </CForm>
  )
}

export default Select
