import React from 'react'

const AdminPanel = () => {
  return (
    <div>
        <div>
            <div class="admin-container">
                <div class="admin-sidebar">
                    <div class="sidebar-header">
                        <h3>Admin Panel</h3>
                    </div>
                    <ul class="sidebar-menu">
                        <li>Add User</li>

                    </ul>
                </div>
                <div class="admin-content">
                    <div class="admin-table">
                       
                        <div class="search-bar">
                            <input  type="search" class="search-input" id="datatable-search-input" placeholder="Search..." />
                            <button class="search-button" type="submit">
                                <i class="fa fa-search"></i>
                            </button>
                        </div>
                        <table class="table table-bordered my-4 " >
                            <caption></caption>
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Username</th>
                                    <th>Email</th>
                                    <th className='action-col'>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                
                                    <tr>
                                        <td>id</td>
                                        <td>username</td>
                                        <td>email</td>
                                        <td><button type="button" class="btn btn-warning" data-toggle="modal" data-target="#exampleModal">
                                            <i class="fas fa-edit"></i>
                                        </button>
                                            <p className='delete  mx-4'> <i class="fa fa-trash" aria-hidden="true"></i></p></td>
                                    </tr>
                                
                            </tbody>
                        </table>
                    </div>
                </div >
            </div >
            <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <form className="add-user-form">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Update User</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <div className="form-group">
                                    <label htmlFor="username">Username</label>
                                    <input type="text" className="form-control" id="username" placeholder="Enter username"
                                         />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">Email</label>
                                    <input type="email" className="form-control" id="
                               email" placeholder="Enter email"
                                         />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="password">Password</label>
                                    <input type="password" className="form-control" id="password" placeholder="Enter password"
                                         />
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                <button type="submit" className="btn btn-warning">Update</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    </div>
  )
}

export default AdminPanel