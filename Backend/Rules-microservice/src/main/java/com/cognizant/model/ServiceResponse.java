package com.cognizant.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor

//The output format for serviceCharges
public class ServiceResponse {
	private String message;
	private long accountNumber;
	private Double balance;

}
