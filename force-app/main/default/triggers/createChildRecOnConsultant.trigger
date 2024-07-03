trigger createChildRecOnConsultant on Consultant__c (after insert) 
{
    List<Past_Information__c> pastInfoList = new List<Past_Information__c>();

    for(Consultant__c con : trigger.new)
    {
        if(con.Type__c == 'Employee')
        {
            Past_Information__c newRec = new Past_Information__c();
            newRec.Consultant__c = con.Id;
            newRec.Company__c = 'TCS';
            pastInfoList.add(newRec);
        }
    }
    if(!pastInfoList.isEMpty())
    {
        insert pastInfoList;
    }
}