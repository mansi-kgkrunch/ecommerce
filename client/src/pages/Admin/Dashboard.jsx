import React from 'react'
import env from '../../env.json'

export default function Dashboard() {
  document.title = `Dashboard | ${env.APP_NAME}`

  return (
    <div className="row">
      <div className="col-12 grid-margin">
        <div className="card">
          <div className="card-body">
            <div className="d-flex align-items-center justify-content-between">
              <div>
                <h4 >Dashboard</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
