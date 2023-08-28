/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/no-children-prop */
import React, { FunctionComponent } from 'react';

interface Myparameters {
    first: string;
    last: string;
    age: number
    gender: string
    company: string
    country: string
    city: string
    phoneno: number
    functionname: string
}

const FC: FunctionComponent<Myparameters> = ({ first, last, age, gender, company, country, city, phoneno, functionname }) => {
    return (
        <>
            <div className='text-center grid place-items-center h-screen w-full'>
                <p>
                    Hello EveryOne!<br />
                    Below Is Some Data About Me <br />
                    This Data Is Coming Using {functionname}
                </p>
                
                <p>FisrtName: {first}</p>
                <p>LastName: {last}</p>
                <p>Age: {age}</p>
                <p>Gender: {gender}</p>
                <p>Company: {company}</p>
                <p>Country: {country}</p>
                <p>City: {city}</p>
                <p>Phone No: {phoneno}</p>
            </div>
        </>
    );
};


export default function MYFC() {
    return (
        <div>
            <FC
                first='Rana'
                last='Rabees'
                age={13}
                gender="Male"
                company="RanaVerse"
                country="Pakistan"
                city="Taxila"
                phoneno={12345678911}
                functionname="'FunctionComponent'"
            />
        </div>
    );
}





