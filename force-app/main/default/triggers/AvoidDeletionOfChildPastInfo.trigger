trigger AvoidDeletionOfChildPastInfo on Past_Information__c (before delete) 
{
    Set<Id> conId = new Set<Id>();
    for(Past_Information__c pInfo: trigger.old)
    {
        conId.add(pInfo.Consultant__c);
    }

    map<Id, Consultant__c> mapCon = new Map<Id, Consultant__c>();
    for(Consultant__c con: [Select Id, Type__c, Status__c from Consultant__c where Id IN: conId])
    {
        mapCon.put(con.Id, con);
    }

    for(Past_Information__c pInfo: trigger.old)
    {
        if(mapCon.get(pInfo.Consultant__c).Type__c == 'Employee' && mapCon.get(pInfo.Consultant__c).Status__c == 'Approved')
        {
            pInfo.addError('You can not delete this record as the consultant status is Aproved and Type is Employee');
        }
    }   
}