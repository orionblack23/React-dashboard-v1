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
        <CFormLabel htmlFor="inputTitle2">Title</CFormLabel>
        <CFormInput placeholder="Bill title" id="inputTitle2" />
      </CCol>
      <CCol md={6}>
        <CFormLabel htmlFor="inputPrice">Price</CFormLabel>
        <CFormInput placeholder="1 000 000 " id="inputPrice" type="number" />
      </CCol>
      <CCol xs={12}>
        <CButton type="submit">Submit</CButton>
      </CCol>
    </CForm>
  )
}

export default Select
