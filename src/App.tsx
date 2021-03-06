import React from "react";
import "./App.css";
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import Home from "./UI/views/Home";
import Login from "./UI/views/Login";
import PersonalInfo from "./UI/views/PersonalInfo";
import PassportInfo from "./UI/views/PassportInfo";
import Register from "./UI/views/Register";
import ProtectedRoute from "./UI/components/ProtectedRoute";
import ProtectedRouteAdmin from "./UI/components/ProtectedRouteAdmin";
import NotFound from "./UI/views/NotFound";
import Footer from "./UI/components/Footer";
import NewRequest from "./UI/views/NewRequest";
import TestRBwithRHF from "./UI/views/TestRBwithRHF";
import NewApp from "./UI/views/NewApp";
import ManageRequests from "./UI/views/ManageRequests";
import FileAttachments from "./UI/views/FileAttachments";
import Agreament from "./UI/views/Agreament"
import Result from "./UI/views/Result"
////// Admin Imports 
import InwardApplication from "./UI/views/Admin/InwardApplication";
import OutwardApplication from "./UI/views/Admin/OutwardApplication";
import NewAppAdmin   from "./UI/views/Admin/NewApp";
import PersonalInfoAdmin from "./UI/views/Admin/PersonalInfo";
import PassportInfoAdmin from "./UI/views/Admin/PassportInfo";
import EditRow from "./UI/components/EditRow";
import FileAttachmentsAdmin from "./UI/views/Admin/FileAttachments";



function App() {

	return (
		<Router>

			
					<Switch>
	                /////// Public Routing 
						<Route exact path="/login" component={Login} />
						<Route exact path="/register" component={Register} />
						<Route exact path="/TestRBwithRHF" component={TestRBwithRHF} />
					////// Client Route 
      					<ProtectedRoute exact path="/" component={NewApp} />
						<ProtectedRoute exact path="/newApp" component={NewApp} />
						<ProtectedRoute exact path="/personalInfo" component={PersonalInfo} />
						<ProtectedRoute exact path="/passportInfo" component={PassportInfo} />
						<ProtectedRoute exact path="/newRequest" component={NewRequest} />
						<ProtectedRoute exact path="/managerequests" component={ManageRequests} />
						<ProtectedRoute exact path="/fileAttachements" component={FileAttachments} />
						<ProtectedRoute exact path="/Agreament" component={Agreament} />
						<ProtectedRoute exact path="/result" component={Result} />
						<ProtectedRoute exact path="/EditRow" component={EditRow} />
						
                    /////admin routing 						
						<ProtectedRoute exact path="/admin/personalInfo" component={PersonalInfoAdmin} />
						<ProtectedRoute exact path="/admin/passportInfo" component={PassportInfoAdmin} />
						<ProtectedRoute exact path="/admin/newApp" component={NewAppAdmin} />
						<ProtectedRoute exact path="/admin/InwardApplication" component={InwardApplication} />
						<ProtectedRoute exact path="/admin/OutwardApplication" component={OutwardApplication} />
						<ProtectedRoute exact path="/admin/FileAttachments" component={FileAttachmentsAdmin} />
						
						{/* <Route exact path="/notfound" component={NotFound} />
						<Redirect to="/notfound" /> */}
					</Switch>
				
				<Footer />

		</Router>
	);
}

export default App;
