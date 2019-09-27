import React, {Component} from 'react';
import './displayCustomer.css';
class DisplayCustomers extends Component {
    constructor(props) {
        super(props);
        this.state= {
            customers: [],
            customer: {
                id: '',
                firstName: '',
                lastName: ''
            }
        };
        this.getCustomers();
        };


    componentDidMount() {
        // this.getCustomers();
    }

    getCustomers=_=>{
        fetch('http://localhost:4000/customer')
            .then(response=>response.json())
            .then(response=>this.setState({customers:response.data}))
            .catch(err=>console.log(err))
    }
    addCustomer=_=>{
        const {customer}=this.state;
        fetch(`http://localhost:4000/addCustomer?id=${customer.id}&firstName=${customer.firstName}&lastName=${customer.lastName}`)
            .then(this.getCustomers)
            .then(response=>console.log(response))
            .catch(err=>console.log(err))
    }
    renderCustomer=({id,firstName,lastName})=>

            <tr>
                <th scope="row">{id}</th>
                <td>{firstName}</td>
                <td>{lastName}</td>

            </tr>

    render() {
        const { customers,customer }=this.state;
        return (
            <div>
                <div className="row">
                    <div className="col-md-3">

                    </div>
                    <div className="col-md-6">
                        <table className="table">
                            <thead className="thead-dark">
                            <tr>
                                <th scope="col">ردیف</th>
                                <th scope="col">نام مشتری</th>
                                <th scope="col">فامیلی</th>

                            </tr>
                            </thead>
                            <tbody>
                            {customers.map(this.renderCustomer)}

                            </tbody>
                        </table>
                    </div>
                    <div className="col-md-3">

                    </div>
                </div>
                <div className="row">
                    <div className="col-md-3">
                    </div>
                    <div className="col-md-6">
                    <form>
                        <div className="form-group row">
                            <label htmlFor="colFormLabelSm"
                                   className="col-sm-2 col-form-label col-form-label-sm">کد مشتری</label>
                            <div className="col-sm-10">
                                <input type="text" className="form-control form-control-sm" value={customer.id} id="colFormLabelSm"
                                       onChange={e=>this.setState({customer:{...customer,id:e.target.value}})} placeholder="کد مشتری را وارد کنید"/>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="colFormLabel" className="col-sm-2 col-form-label">نام مشتری:</label>
                            <div className="col-sm-10">
                                <input type="text" className="form-control" value={customer.firstName} id="colFormLabel"
                                       onChange={e=>this.setState({customer:{...customer,firstName:e.target.value}})} placeholder="نام مشتری را وارد کنید"/>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="colFormLabelLg"
                                   className="col-sm-2 col-form-label col-form-label-lg">نام خانوادگی مشتری:</label>
                            <div className="col-sm-10">
                                <input type="text" className="form-control form-control-lg" value={customer.lastName} id="colFormLabelLg"
                                       onChange={e=>this.setState({customer:{...customer,lastName:e.target.value}})}  placeholder="فامیلی مشتری را وارد کنید"/>
                            </div>
                        </div>
                        <button className="btn btn-success" onClick={this.addCustomer}>ثبت مشتری</button>
                    </form>

                    </div>
                        <div className="col-md-3">
                    </div>
                </div>
            </div>
        );
    }
}

export default DisplayCustomers;
