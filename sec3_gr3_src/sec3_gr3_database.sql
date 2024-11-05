-- DROP DATABASE Hypegear;
CREATE DATABASE Hypegear;
use Hypegear;

-- drop table Users;
-- drop table Admins;
-- DROP table Product;


CREATE TABLE Users (
    UserEmail VARCHAR(50) NOT NULL,
    FName VARCHAR(15) NOT NULL,
    LName VARCHAR(15) NOT NULL,
    UserPassword VARCHAR(20) NOT NULL,
    Birthdate DATE NOT NULL,
    Phone VARCHAR(10) NOT NULL,
    Age INT DEFAULT NULL,
    CONSTRAINT PK_MemberID PRIMARY KEY (UserEmail)
);

CREATE TABLE Admins(
    AdminID VARCHAR(10) NOT NULL,
    UserName VARCHAR(15) NOT NULL,
    Roles VARCHAR(20) NOT NULL,
    AdEmail VARCHAR(50) NOT NULL,
    AdminPassword VARCHAR(20) NOT NULL,
    CONSTRAINT PK_AdminID PRIMARY KEY (AdminID)
);
 
CREATE TABLE Product (
   ProductID VARCHAR(10) NOT NULL,
   ProductName VARCHAR(50) NOT NULL,
   Collection VARCHAR(50) NOT NULL,
   Meterial VARCHAR(20) NOT NULL,
   Price int not null,
   ProductDescription VARCHAR(200) NOT NULL,
   size_S INT NOT NULL,  
	size_M INT NOT NULL,
	size_L INT NOT NULL,
    size_XL INT NOT NULL,
    size_XXL INT NOT NULL,
    size_superXL INT NOT NULL,
	Quantity INT NOT NULL,
    Color varchar(20)not null,
    Image varchar(100) not null,
   CONSTRAINT PK_ProductID PRIMARY KEY (ProductID)
);

CREATE TABLE Teammembers (
   MemberID VARCHAR(10) NOT NULL,
   Memberusername VARCHAR(15) NOT NULL,
   MemberPassword VARCHAR(20) NOT NULL,
   FName VARCHAR(15) NOT NULL,
   LName VARCHAR(15) NOT NULL,
   Roles VARCHAR(20) NOT NULL,
   CONSTRAINT PK_MemberID PRIMARY KEY (MemberID)
);

Create table EventProduct(
	EventProductID VARCHAR(10) NOT NULL,
   EventProductName VARCHAR(50) NOT NULL,
   EventProductCollection VARCHAR(50) NOT NULL,
   EventProductMeterial VARCHAR(20) NOT NULL,
   EventProductColor varchar(50) NOT Null,
   EventProductSize varchar(50) not null,
   EventProductPrice int not null,
   EventProductDescription VARCHAR(200) NOT NULL,
   CONSTRAINT PK_EventProductID PRIMARY KEY (EventProductID)
);

INSERT INTO Teammembers (MemberID, Memberusername, MemberPassword, FName, LName, Roles) 
	VALUES 
    ('6588174','Thitiwan_Mook','200','Thitiwan','Keattitat','DB'),
    ('6588116','Pornpatchra_to','201','Pornpatchra','Wattananan','Developer_Designer'),
    ('6588117','Nuttipong_Eak','202','Nuttipong','Wattanaboonma','Developer'),
    ('6588197','Kirana_Mind','203','Kirana','Teerachanatarn','Developer_Stylish');
select * from Teammembers;

INSERT INTO Product(ProductID,ProductName,Collection,Meterial,price,ProductDescription,size_S,size_M,size_L,size_XL,size_XXL,size_superXL,Quantity,Color,Image)
VALUES
   ('PID001','Dear Honey','Im not a God Im a Human','Cotton100%','790','To my Dear',1,1,1,1,1,1,6,'Black','https://drive.google.com/thumbnail?id=1bddFBfm5jxJuQFsS1uMCo8dSliIiUdWy
'),('PID002','Dear Honey','Im not a God Im a Human','Cotton100%','790','To my Dear',1,1,1,1,1,1,6,'White','https://drive.google.com/thumbnail?id=1M5CKN_bnyam3EzKY8V-g7UIrDObxpAWA
'),('PID003','See Me In The Crown','Im not a God Im a Human','Cotton100%','790','You Just See Me In The Crown',1,1,2,1,1,1,7,'Black','https://drive.google.com/thumbnail?id=1RM7aUQTVjd8ajo-d---fd2k__XNmwMen
'),('PID004','See Me In The Crown','Im not a God Im a Human','Cotton100%','790','You Just See Me In The Crown',1,1,1,1,2,1,7,'White','https://drive.google.com/thumbnail?id=1qItbuyUzkCZujaz5BiO17blK3AvbLcgj
'),('PID005','Angel doesn\'t care','Im not a God Im a Human','Cotton100%','790','Because I\'m an angle, whatever you do, I don\'t care.',1,1,1,2,1,0,6,'Black','https://drive.google.com/thumbnail?id=16h-S1vSPyd-FJ_vZ6AuzBRo8gkooqpkf
'),('PID006','Angel doesn\'t care','Im not a God Im a Human','Cotton100%','790','Because I\'m an angle, whatever you do, I don\'t care.',1,0,1,3,1,0,6,'White','https://drive.google.com/thumbnail?id=1OoVcDVExx45wNalz-vyY_OkxzMYyPDrA
'),('PID007','HypeGear','Im not a God Im a Human','Cotton100%','790','Our Product is here',1,0,0,0,1,1,3,'Black','https://drive.google.com/thumbnail?id=1OOu2APOMMRUrK3b1YtyiHcYrkHbbgq5l
'),('PID008','HypeGear','Im not a God Im a Human','Cotton100%','790','Our Product is here',1,1,1,1,1,1,6,'White','https://drive.google.com/thumbnail?id=1-bL14zfuaH2rnBMEyJuRZkrAgK5n6SUq
'),('PID009','Be My Valentine','Special day','Cotton100%','790','Please, be my valentine',1,1,2,1,0,0,4,'Black','https://drive.google.com/thumbnail?id=1H41xLc2VDI3OGQWvbufGn3PkxJ2_H4nv
'),('PID010','Be My Valentine','Special day','Cotton100%','790','Please, be my valentine',0,1,1,1,0,0,3,'White','https://drive.google.com/thumbnail?id=1w5ImnirXKJikqMkZ6ohKlh8Pn-5oPDoh
'),('PID011','I want you to be my christmas','Special day','Cotton100%','790','All I want in christmas is you',1,1,1,1,1,0,5,'Black','https://drive.google.com/thumbnail?id=1Jlw9-j_ddTz6nr1ehcMo38kPQum2QShL
'),('PID012','I want you to be my christmas','Special day','Cotton100%','790','All I want in christmas is you',0,0,1,0,0,0,1,'White','https://drive.google.com/thumbnail?id=1IZNYEtbI1p0iW11PFjUHz1XvMoLijslk
'),('PID013','Helloween','Special day','Cotton100%','790','Haloween is not joke',1,1,1,1,1,1,6,'Black','https://drive.google.com/thumbnail?id=1i1kd_RVWmyDNaangjgISFdwPe60ToO8C
'),('PID014','Helloween','Special day','Cotton100%','790','Haloween is not joke',1,1,2,3,1,1,9,'White','https://drive.google.com/thumbnail?id=1CTBKoeSKeat6EF-YEuWSCWDiZI91IVy_
'),('PID015','Hi Mr.Bloom','Mr.Bloom','Cotton100%','790','Hi Mr.Bloom. Hope you are not sad.',1,10,1,1,0,0,13,'Black','https://drive.google.com/thumbnail?id=1uZycBw4U-fPuwQcq5VmWrw5Qt3r0ohay
'),('PID016','Hi Mr.Bloom','Mr.Bloom','Cotton100%','790','Hi Mr.Bloom. Hope you are not sad.',0,1,1,0,0,0,2,'White','https://drive.google.com/thumbnail?id=1eROOfkwksjTmUxerGePh35rmOZJtwfd5
'),('PID017','Could you please open your heart','Mr.Bloom','Cotton100%','790','Colud you please be kind to me',1,1,1,0,0,1,4,'Black','https://drive.google.com/thumbnail?id=1pKgLoAWwxW4uQUhOs82it9jwAS9P9FyY
'),('PID018','Could you please open your heart','Mr.Bloom','Cotton100%','790','Colud you please be kind to me',1,1,1,1,1,1,6,'White','https://drive.google.com/thumbnail?id=1scNMR4BBs3H6K--u0InsHOsJnsukTyVA
'),('PID019','Rich As Hell','Rich As Hell','Cotton100%','790','I am a Billionare',1,1,1,3,1,0,7,'Black','https://drive.google.com/thumbnail?id=14AbGzclpw7Yx-3ZczZCXeh59PlJAomxR
'),('PID020','Rich As Hell','Rich As Hell','Cotton100%','790','I am a Billionare',1,1,1,1,1,1,6,'White','https://drive.google.com/thumbnail?id=1vtGD0QlVrJGwGcEjNbSu_9EjrOoRtQ0f
'),('PID021','Can buy more than 10 Porsche','Rich As Hell','Cotton100%','790','If you love Porsche, why don\'t we buy it?',1,1,3,3,1,1,10,'Black','https://drive.google.com/thumbnail?id=1s5IRF4uGBP8_9xZA8w6YRsD21fsImUc_
'),('PID022','Can buy more than 10 Porsche','Rich As Hell','Cotton100%','790','If you love Porsche, why don\'t we buy it?',1,1,1,1,0,0,4,'White','https://drive.google.com/thumbnail?id=1u5Qll46xJvxiSLVZEsEhACUauZitCsCh
'),('PID023','Do ur be(s)t','I\' am not a God I am a Human','Cotton100%','790','Do the bet with your best.',0,1,3,1,1,1,7,'Black','https://drive.google.com/thumbnail?id=13oVM7_OE9d4Ka-rYb09YdCMawKmrg37Z
'),('PID024','Do ur be(s)t','I\' am not a God I am a Human','Cotton100%','790','Do the bet with your best.',1,1,1,1,1,1,6,'White','https://drive.google.com/thumbnail?id=1TObCNfr-Z8nluMPWUhJzITA_KevfePVI
');
select * from Product;

INSERT INTO Users(UserEmail,FName,Lname,UserPassword,Birthdate,Phone,Age)
VALUES
('johnwick@gmail.com', 'John','Wick', 'password123', '2000-05-15', '0234567891', 24),
('jane@gmail.com', 'Jane',' Smith', 'securepass','1998-09-28', '0987654321', 26),
('bob@gmail.com', 'Bob',' Johnson', 'pass123', '1995-02-10', '0343434343', 29),
('alice@gmail.com', 'Alice',' Brown', 'p@ssw0rd', '1997-03-10', '0555555555', 27),
('charlie@gmail.com', 'Charlie',' Green', 'letmein', '1995-11-02', '0777777777', 29),
('sarah@gmail.com', 'Sarah',' Miller', 'secret123', '1992-08-25', '0222222222', 32),
('michael@gmail.com', 'Michael',' White', 'mypass', '1989-10-05', '0648669666', 35),
('emily@gmail.com', 'Emily',' Davis', 'secure123', '2000-07-15', '0676767676', 24),
('alex@gmail.com', 'Alex',' Turner', 'mypassword','1998-12-30', '0771771771', 26),
('olivia@hotmail.com', 'Olivia',' Taylor', 'olivia123', '1996-05-22', '0999999999', 28),
('will@hotmail.com', 'Will',' Johnson', 'willpass', '1995-01-18', '0888888888', 29),
('sophia@hotmail.com', 'Sophia',' Lee', 'sophia456', '1993-04-14', '0666666666', 30),
('ryan@hotmail.com', 'Ryan',' Clark', 'ryanpass', '1999-04-08', '0888555666', 23),
('grace@gmail.com', 'Grace',' Turner', 'gracepass', '1989-03-28', '0555999888', 33),
('david@hotmail.com', 'David',' Moore', 'david123', '1986-07-03', '0222888999', 36),
('ethan@gmail.com', 'Ethan ','Harris', 'ethanpass', '1998-11-22', '0565656565', 24),
('mia@gmail.com', 'Mia',' Garcia', 'miapass', '1995-06-09', '0454545454', 27),
('noah@hotmail.com', 'Noah',' Adams', 'noahpass', '1989-03-28', '0333333333', 31),
('logan@gmail.com', 'Logan','Thompson', 'logan123', '1994-11-19', '0212121212', 28),
('hazel@gmail.com', 'Hazel',' Turner', 'hazelpass', '1997-03-28', '0787878787', 24),
('stella@gmail.com', 'Stella',' Robinson', 'stellapass', '2007-10-07', '0987654321', 17);
select * from Users;


Insert into Admins(AdminID,Username,Roles,AdEmail,AdminPassword)
Values
('AD001', 'admin_john', 'SiteAdmin', 'johnny.saw@gmail.com', 'JohnnyWassss2'),
('AD002', 'admin_emily', 'ContentManager', 'emily.smith@gmail.com', 'EmilyInParis00'),
('AD003', 'admin_mike', 'Moderator', 'mike.wilson@gmail.com', 'MikeisSupercool!'),
('AD004', 'admin_susan', 'SiteAdmin', 'susantofam@gmail.com', 'Sus@ntoFC'),
('AD005', 'admin_alex', 'ContentManager', 'alexsonprx@gmail.com', 'AlexDesk!'),
('AD006', 'admin_lisa', 'Moderator', 'lisa111@gmail.com', 'Lalisasipretty1'),
('AD007', 'admin_david', 'SiteAdmin', 'davi.lish@gmail.com', 'd4v4dprx');
select * from Admins;

