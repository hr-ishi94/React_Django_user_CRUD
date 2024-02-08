import React from 'react'
import { getlocal } from '../helpers/auth'
import { jwtDecode } from 'jwt-decode'

import AdminPanelPage from '../pages/AdminPanelPage'
import HomePage from '../pages/HomePage'
import LoginPage from '../pages/LoginPage'



const PrivateRouter = ({ children, ...rest }) => {
    const response=getlocal('authToken')
    if (response){
        const decoded=jwtDecode(response)
        if (decoded.is_admin){
            console.log("Admin page")
            return (
                <div>
                    <AdminPanelPage title={'ADMIN PAGE'}/>
                </div>
              )
            }
            else if(!decoded.is_admin){
                console.log("Admin page")
                
        return (
            <div>
                <HomePage title={'HOME PAGE'}/>
            </div>
          )
        }

        }
    else{

        return (
          <div>
              <LoginPage/>
          </div>
        )
    }
}

export default PrivateRouter