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
            onRequest: function() { node.set('value', 'Saving Record'); node.setStyle('color','black');},
            onComplete: function(response) { update_monthly_salary[work_days] = false;  if ( response.item(0).style.color == "green" ) { node.set('value',working_days); node.setStyle('color','green'); } else { node.set('value', ''), node.setStyle('color','red'); node.set('placeholder','Total days too high'); } }
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

    if ( !update_monthly_salary[leave_days] ) {
        update_monthly_salary[leave_days] = true;
	      var url = 'index.php/person_monthly_salary/';
        var req = new Request.HTML({
            method: 'post',
            url: url,
            data: { 'id':monthly_salary_form_id,
					'parent' : person_id,					
					'leave_days':total_leave_days,					
					'month':month,
					'action':'update_leave_days',
					'submit_type':'save'
				  },
            onRequest: function() { node.set('value', 'Saving Record'); node.setStyle('color','black');},
            onComplete: function(response) { update_monthly_salary[leave_days] = false;  if ( response.item(0).style.color == "green" ) { node.set('value', total_leave_days); node.setStyle('color','green'); } else { node.set('value',''); node.setStyle('color','red'); node.set('placeholder','Total days too high'); } }
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
	}
	else{
		alert("This value has to be a number less than 30");
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
