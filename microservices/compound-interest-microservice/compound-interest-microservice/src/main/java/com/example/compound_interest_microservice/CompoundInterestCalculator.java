package com.ci.compound_interest_microservice;
import org.springframework.stereotype.Service;
@Service
public class CompoundInterestCalculator implements InterestCalculator
{
    @Override
    public double calculate(double principal, double rate, double years) 
    {
        // TODO Auto-generated method stub
        return (principal * Math.pow(1 + (rate / 100), years) -principal);
    }  
}