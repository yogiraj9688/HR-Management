public with sharing class TestWrapperClass {
    @AuraEnabled(cacheable=true)
    public static List<Consultant__c> getConsultantDetails()
    {
        return [Select Id, Name, Date_of_Birth__c, Date_of_Joining__c, Email__c, Experience__c, Adharcard_Number__c, 
        Pan_Card__c, Phone__c,Postal_Code__c, Type__c, Supervisor__c from Consultant__c];
    }

    
    @AuraEnabled(cacheable=true)
    public static List<Past_Information__c> getPastInformationDetails()
    {
        return [Select Id, Name, Company__c, Start_Date__c, End_Date__c, Feedback__c from Past_Information__c];
    }

    @AuraEnabled(cacheable=true)
    public static List<Client__c> getClientDetails()
    {
        return [Select Id, Name, Phone__c, City__c, Postal_Code__c, State__c, Street_Address__c,
        Website__C from Client__c];
    }

    @AuraEnabled(cacheable=true)
    public static List<Project__c> getProjectDetails()
    {
        return [Select Id, Name, Client__r.Name,Duration__c, Start_Date__c, End_Date__c, Estimate_Budget__c  from Project__c];
    }

    @AuraEnabled(cacheable=true)
    public static List<Training__c> getTrainingDetails()
    {
        return [Select Id, Name, TrainingId__c,Technology__c, Start_Date__c, End_Date__c  from Training__c];
    }
} 