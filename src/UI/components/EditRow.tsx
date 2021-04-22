import * as React from 'react';
import {IRequests  } from "../../State/ManageRequests/types";
import { useHistory,useLocation } from "react-router-dom";
import { useForm,Controller } from "react-hook-form";
import {IApplicationStatusUpdateRequst} from "../../State/ManageRequests/types"
import {ApplicationStatusUpdateRequst} from "../../State/ManageRequests/actions"
import {useDispatch,useSelector } from "react-redux"
import { Alert } from 'reactstrap';
import { IRequestsState } from '../../State/ManageRequests/types';
import {RootState} from "../../State/rootReducer"
import * as actions from "./../../State/ManageRequests/actions"
import {Steps,ErrorMessages} from "../../types/Enums"


interface FormInput{
  Remark:string
}

const EditRow: React.FunctionComponent = () => {
  const RequestsState:IRequestsState = useSelector<RootState,RootState["manageRequest"]>(state => state.manageRequest);
const history = useHistory();
const location=useLocation();
const dispatch=useDispatch();
let row:any= location.state;
const[alertVisible,setAlertVisible]=React.useState(false);
const[alertType,setAlertType]=React.useState("");

const { register, handleSubmit, watch, errors,setValue, getValues,control } = useForm<FormInput>({

});

React.useEffect(() => {
  if(RequestsState.message!="")
  {
      setAlertVisible(true);
  
    if(RequestsState.hasError)
    {
      setAlertType("danger");
    }else
    {
      setAlertType("success");
    }
    window.setTimeout(()=>{
      setAlertVisible(false);
   dispatch(actions.ClearMeassageError());


    },3000)
  }
  else
  {
    setAlertVisible(false);
  }


 }, [RequestsState.message]);


const  submit=(data:FormInput)=>{
  let input:IApplicationStatusUpdateRequst={
    applicationNumber:row?.applicationNumber,
    statusId:3,
    userId:row?.userId,
    remark:data.Remark

    }
  dispatch(ApplicationStatusUpdateRequst(input));

}

 React.useEffect(() => {
   row= location.state;
}, [location]);
  return <> 
    <Alert color={alertType}isOpen={alertVisible} >
          {RequestsState.message}
    </Alert>  
  <main className="login-bg">
  <div className="container-fluid" style={{marginBottom: 10}}>
    {/* Outer Row */}
    <div className="row justify-content-center">
      <div className="col-xl-12 col-lg-12 col-md-12">
        <div className="card o-hidden border-1 shadow my-5 animate__animated animate__fadeIn " style={{border: '1px solid rgb(189, 189, 189)'}}>
          <div className="card-header bg-dark">
            <div className="text-center">
              <h1 className=" text-gray-900 mb-1 shorooq gold" style={{fontSize: 28}}> اعادة الطلب</h1>
            </div>
          </div>
          <div className="card-body p-5 ">
            <div className="p-5">
              <form className="user" onSubmit={handleSubmit(submit)}>
                {/* ################### form- row-001 #################*/}
                <div className="form-group row">
                  <label  className="col-sm-3 col-form-label">رقم المعاملة</label>
                  <div className="col-sm-6">
                    <input type="text" disabled={true} value={row.applicationNumber} className="form-control form-control-user" />
                  </div>
                </div>
                {/* ################### form- row-002 #################*/}
                <div className="form-group row">
                  <label  className="col-sm-3 col-form-label">الرقم المدنى</label>
                  <div className="col-sm-6">
                    <div className="form-group">
                    <input type="text"  disabled={true} value={row.civilId}  className="form-control form-control-user" />
                    </div>
                  </div>
                </div>
                {/* ################### form- row-003 #################*/}
                  <div className="form-group row">
                  <label  className="col-sm-3 col-form-label"> اسم صاحب المعاملة</label>
                  <div className="col-sm-6">
                    <div className="form-group">
                    <input type="text"  disabled={true} value={row.userName}  className="form-control form-control-user" />
                    </div>
                  </div>
                </div>
                {/* ################### form- row-003 #################*/}
                  <div className="form-group row">
                  <label  className="col-sm-3 col-form-label">نوع المعاملة</label>
                  <div className="col-sm-6">
                    <div className="form-group">
                    <input type="text"  disabled={true} value={row.applicationTypeName}  className="form-control form-control-user" />
                    </div>
                  </div>
                </div>
                {/* ################### form- row-003 #################*/}
                <div className="form-group row">
                  <label  className="col-sm-3 col-form-label">تاريخ المعاملة</label>
                  <div className="col-sm-6">
                    <input type="text" disabled={true} value={new Date(row.applicationDate).toLocaleDateString('ar-EG-u-nu-latn', { weekday: 'long', year: 'numeric', month: 'short', day: 'numeric' })}  className="form-control form-control-user" />
                  </div>
                </div>
                {/* ################### form- row-004 #################*/}
                <div className="form-group row">
                  <label  className="col-sm-3 col-form-label">حالة المعاملة</label>
                  <div className="col-sm-6">
                    <input type="text" disabled={true} value={row.applicationStatusName}  className="form-control form-control-user" />
                  </div>
                </div>
                {/* ################### form- row-005 #################*/}
                <div className="form-group row">
                  <label  className="col-sm-3 col-form-label">ملاحظات</label>
                  <div className="col-sm-6">
                    <textarea name="Remark" className="form-control form-control-user" ref={register({required:true})} />
                  </div>
                  {errors?.Remark?.type==="required" && 
                                 <span className="text-danger">{ErrorMessages.required}</span>  }
                </div>
                {/* ################# submit btn ##################### */}
                <div className="row justify-content-center">
                  
                <button type="submit" className="btn btn-success btn-user shorooq"  style={{padding: 16, marginLeft: 77}}>اعادة  الطلب</button>
                  <button onClick={()=>history.push("/admin/InwardApplication")} className="btn btn-primary btn-user shorooq">العوده للصادر</button>
                </div>
                {/* ################# end submit btn ##################### */}
                <Alert color={alertType}isOpen={alertVisible} >
                 {RequestsState.message}
                </Alert> 
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div></main>


</>;
};

export default EditRow;
