var update_monthly_salary = new Array();


function updateWorkingDays(node,person_id,monthly_salary_form_id, month) {
    node = $(node);

    if (!node) {
        return;
    }
    var color = 'white';
    var working_days = node.get('value');

    if ( !update_monthly_salary[work_days] ) {
        update_monthly_salary[work_days] = true;
        var url = 'index.php/person_monthly_salary/';
        var req = new Request.HTML({
            method: 'post',
            url: url,
            data: { 'id':monthly_salary_form_id,
                'parent' : person_id,
                'working_days':working_days,
                'month':month,
                'action':'update_work_days',
                'submit_type':'save'
            },
            onRequest: function() { node.set('value', 'Saving Record'); node.setStyle('color','red');},
            onComplete: function(response) { update_monthly_salary[work_days] = false;  if ( response.item(0).style.color == "green" ) { node.set('value',working_days); node.setStyle('color','green'); } else { node.set('value', ''), node.setStyle('color','red'); node.set('placeholder','Total days too high'); } }
        }).send();
    } else {
        alert('in progress');
    }
    return false;
}
function updateTransportAllowance(node,person_id,monthly_salary_form_id, month) {
    node = $(node);

    if (!node) {
        return;
    }
    var color = 'white';
    var Total_Transport_allowance = node.get('value');
    if ( !update_monthly_salary[transport_allowance] ) {
        update_monthly_salary[transport_allowance] = true;
        var url = 'index.php/person_monthly_salary/';
        var req = new Request.HTML({
            method: 'post',
            url: url,
            data: { 'id':monthly_salary_form_id,
                'parent':person_id,
                'leave_days':Total_Transport_allowance,
                'month':month,
                'action':'update_Transport_allowance',
                'submit_type':'save'
            },
            onRequest: function() { node.set('value','Saving Record'); node.setStyle('color','blue');},
            onComplete: function(response) { update_monthly_salary[transport_allowance] = false;
                if (response.item(1).style.color != "green") {
                    node.set('value', Total_Transport_allowance);
                    node.setStyle('color', 'green');
                } else {
                    node.set('value','');
                    node.setStyle('color', 'red');
                    node.set('placeholder','Not Correct Transport Allowance');
                }
            }
        }).send();
    } else {
        alert('in progress');
    }
    return false;
}

function updateLeaveDays(node,person_id,monthly_salary_form_id, month) {
    node = $(node);

    if (!node) {
        return;
    }
    var color = 'white';
    var total_leave_days = node.get('value');
    console.log("--------------------");
    console.log(total_leave_days);
    if ( !update_monthly_salary[leave_days] ) {
        update_monthly_salary[leave_days] = true;
        var url = 'index.php/person_monthly_salary/';
        var req = new Request.HTML({
            method: 'post',
            url: url,
            data: { 'id':monthly_salary_form_id,
                'parent':person_id,
                'leave_days':total_leave_days,
                'month':month,
                'action':'update_leave_days',
                'submit_type':'save'
            },
            onRequest: function() { node.set('value','Saving Record'); node.setStyle('color','blue');},
            onComplete: function(response) { update_monthly_salary[leave_days] = false;
                if (response.item(1).style.color != "green") {
                    node.set('value', total_leave_days);
                    node.setStyle('color', 'green');
                } else {
                    node.set('value','');
                    node.setStyle('color', 'red');
                    node.set('placeholder','Total days too high');
                }
            }
        }).send();
    } else {
        alert('in progress');
    }
    return false;
}

function updateOtherAllowance(node,person_id,monthly_salary_form_id, month) {
    node = $(node);

    if (!node) {
        return;
    }
    var color = 'white';
    var Total_other_allow = node.get('value');
    if ( !update_monthly_salary[other_allowance] ) {
        update_monthly_salary[other_allowance] = true;
        var url = 'index.php/person_monthly_salary/';
        var req = new Request.HTML({
            method: 'post',
            url: url,
            data: { 'id':monthly_salary_form_id,
                'parent':person_id,
                'leave_days':Total_other_allow,
                'month':month,
                'action':'update_other_allowance',
                'submit_type':'save'
            },
            onRequest: function() { node.set('value','Saving Record'); node.setStyle('color','blue');},
            onComplete: function(response) { update_monthly_salary[other_allowance] = false;
                if (response.item(1).style.color != "green") {
                    node.set('value', Total_other_allow);
                    node.setStyle('color', 'green');
                } else {
                    node.set('value','');
                    node.setStyle('color', 'red');
                    node.set('placeholder','Please enter correct Allowance Value');
                }
            }
        }).send();
    } else {
        alert('in progress');
    }
    return false;
}

function updateHouseRentDeduction(node,person_id,monthly_salary_form_id, month) {
    node = $(node);

    if (!node) {
        return;
    }
    var color = 'white';
    var Total_hose_rent_deduction = node.get('value');
    if ( !update_monthly_salary[hose_rent_deduction] ) {
        update_monthly_salary[hose_rent_deduction] = true;
        var url = 'index.php/person_monthly_salary/';
        var req = new Request.HTML({
            method: 'post',
            url: url,
            data: { 'id':monthly_salary_form_id,
                'parent':person_id,
                'leave_days':Total_hose_rent_deduction,
                'month':month,
                'action':'update_other_allowance',
                'submit_type':'save'
            },
            onRequest: function() { node.set('value','Saving Record'); node.setStyle('color','blue');},
            onComplete: function(response) { update_monthly_salary[hose_rent_deduction] = false;
                if (response.item(1).style.color != "green") {
                    node.set('value', Total_hose_rent_deduction);
                    node.setStyle('color', 'green');
                } else {
                    node.set('value','');
                    node.setStyle('color', 'red');
                    node.set('placeholder','Please enter correct value for House rent');
                }
            }
        }).send();
    } else {
        alert('in progress');
    }
    return false;
}

function updateGpfAdvanceDeduction(node,person_id,monthly_salary_form_id, month) {
    node = $(node);

    if (!node) {
        return;
    }
    var color = 'white';
    var Total_gpf_advance_deduction= node.get('value');
    if ( !update_monthly_salary[gpf_advance_deduction] ) {
        update_monthly_salary[gpf_advance_deduction] = true;
        var url = 'index.php/person_monthly_salary/';
        var req = new Request.HTML({
            method: 'post',
            url: url,
            data: { 'id':monthly_salary_form_id,
                'parent':person_id,
                'leave_days':Total_gpf_advance_deduction,
                'month':month,
                'action':'update_other_allowance',
                'submit_type':'save'
            },
            onRequest: function() { node.set('value','Saving Record'); node.setStyle('color','blue');},
            onComplete: function(response) { update_monthly_salary[gpf_advance_deduction] = false;
                if (response.item(1).style.color != "green") {
                    node.set('value', Total_gpf_advance_deduction);
                    node.setStyle('color', 'green');
                } else {
                    node.set('value','');
                    node.setStyle('color', 'red');
                    node.set('placeholder','Please enter correct value for GPF');
                }
            }
        }).send();
    } else {
        alert('in progress');
    }
    return false;
}

function updateHouseBuildingAdvanceDeduction(node,person_id,monthly_salary_form_id, month) {
    node = $(node);

    if (!node) {
        return;
    }
    var color = 'white';
    var Total_house_building_advance_deduction= node.get('value');
    if ( !update_monthly_salary[house_building_advance_deduction] ) {
        update_monthly_salary[house_building_advance_deduction] = true;
        var url = 'index.php/person_monthly_salary/';
        var req = new Request.HTML({
            method: 'post',
            url: url,
            data: { 'id':monthly_salary_form_id,
                'parent':person_id,
                'leave_days':Total_house_building_advance_deduction,
                'month':month,
                'action':'update_other_allowance',
                'submit_type':'save'
            },
            onRequest: function() { node.set('value','Saving Record'); node.setStyle('color','blue');},
            onComplete: function(response) { update_monthly_salary[house_building_advance_deduction] = false;
                if (response.item(1).style.color != "green") {
                    node.set('value', Total_house_building_advance_deduction);
                    node.setStyle('color', 'green');
                } else {
                    node.set('value','');
                    node.setStyle('color', 'red');
                    node.set('placeholder','Please enter correct value for House Building Deduction');
                }
            }
        }).send();
    } else {
        alert('in progress');
    }
    return false;
}

function updateInterestAdvanceDeduction(node,person_id,monthly_salary_form_id, month) {
    node = $(node);

    if (!node) {
        return;
    }
    var color = 'white';
    var Total_Interest_Advance_Deduction= node.get('value');
    if ( !update_monthly_salary[interest_advance_deduction] ) {
        update_monthly_salary[interest_advance_deduction] = true;
        var url = 'index.php/person_monthly_salary/';
        var req = new Request.HTML({
            method: 'post',
            url: url,
            data: { 'id':monthly_salary_form_id,
                'parent':person_id,
                'leave_days':Total_Interest_Advance_Deduction,
                'month':month,
                'action':'update_other_allowance',
                'submit_type':'save'
            },
            onRequest: function() { node.set('value','Saving Record'); node.setStyle('color','blue');},
            onComplete: function(response) { update_monthly_salary[interest_advance_deduction] = false;
                if (response.item(1).style.color != "green") {
                    node.set('value', Total_Interest_Advance_Deduction);
                    node.setStyle('color', 'green');
                } else {
                    node.set('value','');
                    node.setStyle('color', 'red');
                    node.set('placeholder','Please Enter correct value for Interest Deduction');
                }
            }
        }).send();
    } else {
        alert('in progress');
    }
    return false;
}

function updateServiceTaxDeduction(node,person_id,monthly_salary_form_id, month) {
    node = $(node);

    if (!node) {
        return;
    }
    var color = 'white';
    var Total_service_tax_deduction= node.get('value');
    if ( !update_monthly_salary[service_tax_deduction] ) {
        update_monthly_salary[service_tax_deduction] = true;
        var url = 'index.php/person_monthly_salary/';
        var req = new Request.HTML({
            method: 'post',
            url: url,
            data: { 'id':monthly_salary_form_id,
                'parent':person_id,
                'leave_days':Total_service_tax_deduction,
                'month':month,
                'action':'update_other_allowance',
                'submit_type':'save'
            },
            onRequest: function() { node.set('value','Saving Record'); node.setStyle('color','blue');},
            onComplete: function(response) { update_monthly_salary[service_tax_deduction] = false;
                if (response.item(1).style.color != "green") {
                    node.set('value', Total_service_tax_deduction);
                    node.setStyle('color', 'green');
                } else {
                    node.set('value','');
                    node.setStyle('color', 'red');
                    node.set('placeholder','Please Enter correct value for service tax');
                }
            }
        }).send();
    } else {
        alert('in progress');
    }
    return false;
}

function updateComputerAdvanceDeduction(node,person_id,monthly_salary_form_id, month) {
    node = $(node);

    if (!node) {
        return;
    }
    var color = 'white';
    var Total_computer_advance_deduction= node.get('value');
    if ( !update_monthly_salary[computer_advance_deduction] ) {
        update_monthly_salary[computer_advance_deduction] = true;
        var url = 'index.php/person_monthly_salary/';
        var req = new Request.HTML({
            method: 'post',
            url: url,
            data: { 'id':monthly_salary_form_id,
                'parent':person_id,
                'leave_days':Total_computer_advance_deduction,
                'month':month,
                'action':'update_other_allowance',
                'submit_type':'save'
            },
            onRequest: function() { node.set('value','Saving Record'); node.setStyle('color','blue');},
            onComplete: function(response) { update_monthly_salary[computer_advance_deduction] = false;
                if (response.item(1).style.color != "green") {
                    node.set('value', Total_computer_advance_deduction);
                    node.setStyle('color', 'green');
                } else {
                    node.set('value','');
                    node.setStyle('color', 'red');
                    node.set('placeholder','Please enter correct value for Computer Deduction');
                }
            }
        }).send();
    } else {
        alert('in progress');
    }
    return false;
}

function updateFestivalAdvanceDeduction(node,person_id,monthly_salary_form_id, month) {
    node = $(node);

    if (!node) {
        return;
    }
    var color = 'white';
    var Total_festival_advance_deduction= node.get('value');
    if ( !update_monthly_salary[festival_advance_deduction] ) {
        update_monthly_salary[festival_advance_deduction] = true;
        var url = 'index.php/person_monthly_salary/';
        var req = new Request.HTML({
            method: 'post',
            url: url,
            data: { 'id':monthly_salary_form_id,
                'parent':person_id,
                'leave_days':Total_festival_advance_deduction,
                'month':month,
                'action':'update_other_allowance',
                'submit_type':'save'
            },
            onRequest: function() { node.set('value','Saving Record'); node.setStyle('color','blue');},
            onComplete: function(response) { update_monthly_salary[festival_advance_deduction] = false;
                if (response.item(1).style.color != "green") {
                    node.set('value', Total_festival_advance_deduction);
                    node.setStyle('color', 'green');
                } else {
                    node.set('value','');
                    node.setStyle('color', 'red');
                    node.set('placeholder','Please enter correct value for Festival Deduction');
                }
            }
        }).send();
    } else {
        alert('in progress');
    }
    return false;
}

var isNumeric = function(node, person_id, monthly_salary_form_id, month){
    node = $(node);
    var type = node.get('id');
    if(!node){
        return;
    }
    var days = node.get('value');

    var regex=/^0{1}$|^([1-9]{1}[0-9]?)$/;
    if (days.match(regex) && days < 31)
    {
        if( type == "leave_days"){
            updateLeaveDays(node,person_id,monthly_salary_form_id, month);
            return true;
        }
        else if(type == "work_days"){
            updateWorkingDays(node,person_id,monthly_salary_form_id, month);
            return true;
        }
        else if(type == "Transport_allowance")
        {
            updateTransportAllowance(node,person_id,monthly_salary_form_id,month);
            return true;
        }
        else if(type=="other_allowance"){
            updateOtherAllowance(node,person_id,monthly_salary_form_id, month);
            return true;
        }
        else if(type == "house_rent_deduction"){
            updateHouseRentDeduction(node,person_id,monthly_salary_form_id, month);
            return true;
        }
        else if(type == "interest_advance_deduction"){
            updateInterestAdvanceDeduction(node,person_id,monthly_salary_form_id, month);
            return true;
        }
        else if(type=="gpf_advance_deduction")
        {
            updateGpfAdvanceDeduction(node,person_id,monthly_salary_form_id, month);
            return true;
        }
        else if(type == "house_building_advance_deduction")
        {
            updateHouseBuildingAdvanceDeduction(node,person_id,monthly_salary_form_id, month);
            return true;
        }
        else if(type=="service_tax_deduction")
        {
            updateServiceTaxDeduction(node,person_id,monthly_salary_form_id, month);
            return true;
        }
        else if(type=="computer_advance_deduction")
        {
            updateComputerAdvanceDeduction(node,person_id,monthly_salary_form_id, month);
            return true;
        }
        else if(type=="festival_advance_deduction"){
            updateFestivalAdvanceDeduction(node,person_id,monthly_salary_form_id, month);
            return true;
        }
    }
    else{
        alert("Please Enter the Correct value");
        return false;
    }
}

var netSalaryPayable = function( position_type ) {
    var gross = gross_salary( position_type );
    var net_pay = gross - deductions( position_type );
    document.getElementById("forms[person_position_salarybreakdown][0][0][fields][gross_salary]").value = gross;
    document.getElementById("forms[person_position_salarybreakdown][0][0][fields][net_salary_payable]").value = net_pay;
}

var deductions = function(position_type){
    if( position_type == 'regular' ){
        var deduct = parseInt(document.getElementById("forms[person_position_salarybreakdown][0][0][fields][gpf]").value)
            + parseInt(document.getElementById("forms[person_position_salarybreakdown][0][0][fields][gi]").value)
            + parseInt(document.getElementById("forms[person_position_salarybreakdown][0][0][fields][income_tax]").value);
        return deduct;
    }
    else if( position_type == 'contract' ){
        return parseInt(document.getElementById("forms[person_position_salarybreakdown][0][0][fields][tds]").value);
    }
}

var gross_salary = function(position_type){
    if( position_type == 'regular' ){
        var gross = parseInt(document.getElementById("forms[person_position_salarybreakdown][0][0][fields][basic_pay]").value)
            + parseInt(document.getElementById("forms[person_position_salarybreakdown][0][0][fields][grade_pay]").value)
            + parseInt(document.getElementById("forms[person_position_salarybreakdown][0][0][fields][hra]").value)
            + parseInt(document.getElementById("forms[person_position_salarybreakdown][0][0][fields][medical_allowance]").value)
            + parseInt(document.getElementById("forms[person_position_salarybreakdown][0][0][fields][deputation_allowance]").value);
        return gross;
    }
    else if( position_type == 'contract' ){
        return parseInt(document.getElementById("forms[person_position_salarybreakdown][0][0][fields][basic_pay]").value);
    }
}