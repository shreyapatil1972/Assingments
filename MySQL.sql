use world;

select Name, Population FROM country;

select Name, Population From country where Population > 50000000;

select Name, Population from country order by Population DESC;

select Name, Population from country order by Population desc limit 5;

select distinct Population from city order by Population;

select  CountryCode, Language, IsOfficial From countrylanguage where Language = 'English' AND IsOfficial = 'T';

select CountryCode, Language, Percentage from countrylanguage where Percentage between 30 and 90;

select  CountryCode, Language From countrylanguage where Language = 'English' or Language = 'Spanish';