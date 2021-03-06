import React, { Component } from "react";
import PropTypes from "prop-types";
import { InputText, Subtitle, InputNumber, InputEmail, DropDown } from "../../atoms";
import { InputGroup } from "../../molecules";
import { findUsModel,occupationModel } from "../../models";


export default class InicialForm extends Component{

	render(){
		const { className, onChange, values, options, occupationOptions,findUsOptions } = this.props;
		return(
			<div className="personal">
				<Subtitle>Antes de mais nada</Subtitle>
				<InputGroup id="name" label="Diz aí como você chama?">
					<InputText value={values["name"]} id="name" onChange={onChange} placeholder="nome"/>
				</InputGroup>
				<InputGroup id="last_name" label="Sobrenome">
					<InputText value={values["last_name"]} id="last_name" placeholder="Ultimo Nome"onChange={onChange}/>
				</InputGroup>
				
				<InputGroup id="cell_phone" label="Como podemos te achar?">
					<InputNumber value={values["cell_phone"]} id="cell_phone" onChange={onChange} placeholder="telefone"/>
				</InputGroup>
				<InputGroup id="email" label="E-mail">
					<InputEmail value={values["email"]} id="email" onChange={onChange} placeholder="email@email.com"/>
				</InputGroup>
				<InputGroup id="role" label="Você é ">
					<DropDown options={occupationModel} value={values["role"]} id="role" onChange={onChange}/>
				</InputGroup>
				
				<InputGroup id="password" label="Senha">		
 					<InputText type="password" value={values["password"]} id="password" onChange={onChange}/>		
  				</InputGroup>
  				<InputGroup id="confirm_password" label="Confirmar Senha">
 					<InputText type="password" value={values["confirm_password"]} id="confirm_password" onChange={onChange}/>
  				</InputGroup>
			</div>
		);
	}
}
