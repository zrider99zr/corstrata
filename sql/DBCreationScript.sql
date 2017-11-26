CREATE TABLE account
(
    accountID INT(11) PRIMARY KEY NOT NULL AUTO_INCREMENT,
    emailAddress VARCHAR(40) NOT NULL,
    hash INT(11) NOT NULL,
    salt INT(11) NOT NULL
);

CREATE TABLE systemAdmin
(
    accountID INT(11) PRIMARY KEY NOT NULL,
    CONSTRAINT systemAdmin_account_accountID_fk FOREIGN KEY (accountID) REFERENCES account (accountID)
);

CREATE TABLE sessions
(
    sessionID INT(11),
    timeCreated TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
    accountID INT(11),
    CONSTRAINT sessions_account_accountID_fk FOREIGN KEY (accountID) REFERENCES account (accountID)
);
CREATE INDEX sessions_account_accountID_fk ON sessions (accountID);

CREATE TABLE institution
(
    institutionID INT(11) PRIMARY KEY NOT NULL AUTO_INCREMENT,
    name VARCHAR(40) NOT NULL,
    address VARCHAR(80) NOT NULL,
    state VARCHAR(20) NOT NULL,
    city VARCHAR(30) NOT NULL,
    zipCode INT(11) NOT NULL
);

CREATE TABLE clientAccount
(
    accountID INT(11) PRIMARY KEY NOT NULL,
    institutionID INT(11) NOT NULL,
    admin TINYINT(1) NOT NULL,
    CONSTRAINT clientAccount_account_accountID_fk FOREIGN KEY (accountID) REFERENCES account (accountID),
    CONSTRAINT clientAccount_institution_institutionID_fk FOREIGN KEY (institutionID) REFERENCES institution (institutionID)
);
CREATE INDEX clientAccount_institution_institutionID_fk ON clientAccount (institutionID);

CREATE TABLE patient
(
    patientID INT(11) PRIMARY KEY NOT NULL AUTO_INCREMENT,
    firstName VARCHAR(20) NOT NULL,
    lastName VARCHAR(20) NOT NULL,
    institutionID INT(11) NOT NULL,
    CONSTRAINT patient_institution_institutionID_fk FOREIGN KEY (institutionID) REFERENCES institution (institutionID)
);
CREATE INDEX patient_institution_institutionID_fk ON patient (institutionID);

CREATE TABLE test
(
    testID INT(11) PRIMARY KEY NOT NULL AUTO_INCREMENT,
    patientID INT(11) NOT NULL,
    accountID INT(11) NOT NULL,
    dateTaken DATETIME,
    CONSTRAINT test_patient_patientID_fk FOREIGN KEY (patientID) REFERENCES patient (patientID),
    CONSTRAINT test_clientAccount_accountID_fk FOREIGN KEY (accountID) REFERENCES clientAccount (accountID)
);
CREATE INDEX test_clientAccount_accountID_fk ON test (accountID);
CREATE INDEX test_patient_patientID_fk ON test (patientID);

CREATE TABLE pressureWoundTest
(
    testID INT(11) PRIMARY KEY NOT NULL,
    PUSHScore INT(11) NOT NULL,
    BatesJensenScore INT(11) NOT NULL,
    SussmanScore INT(11) NOT NULL,
    size DOUBLE(3,2) NOT NULL,
    depth INT(11) NOT NULL,
    edges INT(11) NOT NULL,
    undermining INT(11) NOT NULL,
    necType INT(11) NOT NULL,
    necAmount INT(11) NOT NULL,
    exudateType INT(11) NOT NULL,
    exudateAmnt INT(11) NOT NULL,
    skinColorAround INT(11) NOT NULL,
    peripheralEdema INT(11) NOT NULL,
    peripheralInduration INT(11) NOT NULL,
    granTissue INT(11) NOT NULL,
    epith INT(11) NOT NULL,
    CONSTRAINT pressureWoundTest_test_testID_fk FOREIGN KEY (testID) REFERENCES test (testID)
); 

CREATE TABLE wagnerTest
(
    testID INT(11) PRIMARY KEY NOT NULL,
    grade INT(11) NOT NULL,
    CONSTRAINT wagnerTest_test_testID_fk FOREIGN KEY (testID) REFERENCES test (testID)
);

CREATE TABLE miniNutritionalTest
(
    testID INT(11) PRIMARY KEY NOT NULL,
    a INT(11) NOT NULL,
    b INT(11) NOT NULL,
    c INT(11) NOT NULL,
    d INT(11) NOT NULL,
    e INT(11) NOT NULL,
    f1 INT(11) NOT NULL,
    f2 INT(11) NOT NULL,
    score INT(11) NOT NULL,
    CONSTRAINT miniNutritionalTest_test_testID_fk FOREIGN KEY (testID) REFERENCES test (testID)
);

CREATE TABLE semmesTest
(
    testID INT(11) NOT NULL,
    p1L TINYINT(1) NOT NULL,
    p2L TINYINT(1) NOT NULL,
    p3L TINYINT(1) NOT NULL,
    p4L TINYINT(1) NOT NULL,
    p5L TINYINT(1) NOT NULL,
    p6L TINYINT(1) NOT NULL,
    p7L TINYINT(1) NOT NULL,
    p8L TINYINT(1) NOT NULL,
    p9L TINYINT(1) NOT NULL,
    p10L TINYINT(1) NOT NULL,
    p1R TINYINT(1) NOT NULL,
    p2R TINYINT(1) NOT NULL,
    p3R TINYINT(1) NOT NULL,
    p4R TINYINT(1) NOT NULL,
    p5R TINYINT(1) NOT NULL,
    p6R TINYINT(1) NOT NULL,
    p7R TINYINT(1) NOT NULL,
    p8R TINYINT(1) NOT NULL,
    p9R TINYINT(1) NOT NULL,
    p10R TINYINT(1) NOT NULL,
    CONSTRAINT semmesTest_test_testID_fk FOREIGN KEY (testID) REFERENCES test (testID)
);
CREATE INDEX semmesTest_test_testID_fk ON semmesTest (testID);
