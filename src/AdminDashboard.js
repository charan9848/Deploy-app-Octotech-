import React from 'react'
import { Table, } from '@chakra-ui/react'

const AdminDashboard = () => {
  return (
    <div>
      <div class='container mt-5'>
        <center>

          <button type="button" className="btn btn-primary" onClick={() => window.location.href = '/viewtemplates'}>
            View Templates
          </button>
          <br />
          <br />
          <button type="button" className="btn btn-primary" onClick={() => window.location.href = '/addtemplate'}>
            Add Template
          </button>
        </center>
      </div>
    </div>
  )
}

export default AdminDashboard