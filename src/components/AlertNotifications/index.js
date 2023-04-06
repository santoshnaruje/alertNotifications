// Write your code here

import {AiFillCheckCircle} from 'react-icons/ai'
import {GrFormClose} from 'react-icons/gr'
import {RiErrorWarningFill} from 'react-icons/ri'
import {MdWarning, MdInfo} from 'react-icons/md'

import Notification from '../Notification'

import './index.css'

const AlertNotifications = () => (
  <div className="container">
    <h1>Alert Notifications</h1>
    <Notification>
      <div className="card card1">
        <AiFillCheckCircle className="crct" />
        <div>
          <h1>Success</h1>
          <p>You can access all the files in the folder</p>
        </div>
        <GrFormClose className="wrong" />
      </div>
      <div className="card card2">
        <RiErrorWarningFill className="warn" />
        <div>
          <h1>Error</h1>
          <p>Sorry, you are not authorized to have access to delete the file</p>
        </div>
        <GrFormClose className="wrong" />
      </div>
      <div className="card card3">
        <MdWarning className="warning" />
        <div>
          <h1>Warning</h1>
          <p>Viewers of this file can see comments and suggestions</p>
        </div>
        <GrFormClose className="wrong" />
      </div>
      <div className="card card4">
        <MdInfo className="info" />
        <div>
          <h1>Info</h1>
          <p>Anyone on the internet can view these files</p>
        </div>
        <GrFormClose className="wrong" />
      </div>
    </Notification>
  </div>
)
export default AlertNotifications
