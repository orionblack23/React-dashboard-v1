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
      <CCol xs={12}>
        <CFormLabel htmlFor="inputTitle">Title</CFormLabel>
        <CFormInput id="inputTitle" placeholder="Computer ..." />
      </CCol>
      <CCol xs={12}>
        <CButton type="submit">Submit</CButton>
      </CCol>
    </CForm>
  )
}

export default Select
