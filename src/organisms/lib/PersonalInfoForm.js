import React, { Component } from "react";
import PropTypes from "prop-types";
import { InputText, Subtitle, InputNumber, InputEmail, DropDown } from "../../atoms";
import { InputGroup } from "../../molecules";


export default class PersonalInfoForm extends Component{

	render(){
		const { className, onChange, values, options, occupationOptions } = this.props;
		return(
			<div className="Personal">
				<Subtitle>Informações Pessoais</Subtitle>
				<InputGroup id="name" label="Nome">
					<InputText value={values["name"]} id="name" onChange={onChange}/>
				</InputGroup>
				<InputGroup id="last_name" label="Sobrenome">
					<InputText value={values["last_name"]} id="last_name" onChange={onChange}/>
				</InputGroup>
				<InputGroup id="cell_phone" label="Celular">
					<InputNumber value={values["cell_phone"]} id="cell_phone" onChange={onChange}/>
				</InputGroup>
				<InputGroup id="email" label="E-mail">
					<InputEmail value={values["email"]} id="email" onChange={onChange}/>
				</InputGroup>
				<InputGroup id="role" label="Sou">
					<DropDown options={occupationOptions} value={values["role"]} id="role" onChange={onChange}/>
				</InputGroup>
			</div>
		);
	}
}