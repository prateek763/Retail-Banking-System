package com.cognizant.model;

import javax.validation.constraints.NotNull;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class AccountInput {
	
	@NotNull(message = "Fill Account Number")
	private long accountNumber;
	@NotNull(message = "Fille Amount")
	private double amount;

}