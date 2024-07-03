trigger AvoidConRecord on Consultant__c (before delete) 
{
    for(Consultant__c con : trigger.old)
    {
        if(con.Type__c == 'Employee' && con.Status__c == 'Approved')
        {
            con.addError('You can not delete this record');
        }
    }
}