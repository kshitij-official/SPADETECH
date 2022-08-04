import React from 'react'
import Header from '../../components/header/Header'
import './audit.css'

import { auditHeader } from '../../utils/contents/headers-contents/headerContents'

const Audit = () => {
  return (
    <>
      <Header header={auditHeader} />
    </>
  )
}

export default Audit
