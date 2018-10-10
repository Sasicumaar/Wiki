IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[MASCountries]') AND type in (N'U'))
DROP TABLE [dbo].[MASCountries]
GO

SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

SET ANSI_PADDING ON
GO

CREATE TABLE [dbo].[MASCountries](
	[CountryID] [int] NOT NULL,
	[ISO2] [char](2) NULL,
	[CountryName] [varchar](80) NOT NULL,
	[LongCountryName] [varchar](80) NOT NULL,
	[ISO3] [char](3) NULL,
	[NumCode] [varchar](6) NULL,
	[UNMemberState] [varchar](12) NULL,
	[CallingCode] [varchar](8) NULL,
	[CCTLD] [varchar](5) NULL,
	[InternationalRegion] [varchar](50) NULL,
 CONSTRAINT [PK_MASCountries] PRIMARY KEY CLUSTERED 
(
	[CountryID] ASC
)WITH (PAD_INDEX  = OFF, STATISTICS_NORECOMPUTE  = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS  = ON, ALLOW_PAGE_LOCKS  = ON) ON [PRIMARY]
) ON [PRIMARY]

GO

SET ANSI_PADDING OFF
GO

SET NOCOUNT ON;
SET XACT_ABORT ON;
GO

BEGIN TRANSACTION;
INSERT INTO [dbo].[MASCountries]([CountryID], [ISO2], [CountryName], [LongCountryName], [ISO3], [NumCode], [UNMemberState], [CallingCode], [CCTLD], [InternationalRegion])
SELECT 1, N'AF', N'Afghanistan', N'Islamic Republic of Afghanistan', N'AFG', N'004', N'yes', N'93', N'.af', N'Asia' UNION ALL
SELECT 2, N'AX', N'Aland Islands', N'&Aring;land Islands', N'ALA', N'248', N'no', N'358', N'.ax', N'European Union' UNION ALL
SELECT 3, N'AL', N'Albania', N'Republic of Albania', N'ALB', N'008', N'yes', N'355', N'.al', N'Europe' UNION ALL
SELECT 4, N'DZ', N'Algeria', N'People''s Democratic Republic of Algeria', N'DZA', N'012', N'yes', N'213', N'.dz', N'Africa' UNION ALL
SELECT 5, N'AS', N'American Samoa', N'American Samoa', N'ASM', N'016', N'no', N'1+684', N'.as', N'Oceania' UNION ALL
SELECT 6, N'AD', N'Andorra', N'Principality of Andorra', N'AND', N'020', N'yes', N'376', N'.ad', N'Europe' UNION ALL
SELECT 7, N'AO', N'Angola', N'Republic of Angola', N'AGO', N'024', N'yes', N'244', N'.ao', N'Africa' UNION ALL
SELECT 8, N'AI', N'Anguilla', N'Anguilla', N'AIA', N'660', N'no', N'1+264', N'.ai', N'The Caribbean' UNION ALL
SELECT 9, N'AQ', N'Antarctica', N'Antarctica', N'ATA', N'010', N'no', N'672', N'.aq', N'Antarctica' UNION ALL
SELECT 10, N'AG', N'Antigua and Barbuda', N'Antigua and Barbuda', N'ATG', N'028', N'yes', N'1+268', N'.ag', N'The Caribbean' UNION ALL
SELECT 11, N'AR', N'Argentina', N'Argentine Republic', N'ARG', N'032', N'yes', N'54', N'.ar', N'South America' UNION ALL
SELECT 12, N'AM', N'Armenia', N'Republic of Armenia', N'ARM', N'051', N'yes', N'374', N'.am', N'Asia' UNION ALL
SELECT 13, N'AW', N'Aruba', N'Aruba', N'ABW', N'533', N'no', N'297', N'.aw', N'The Caribbean' UNION ALL
SELECT 14, N'AU', N'Australia', N'Commonwealth of Australia', N'AUS', N'036', N'yes', N'61', N'.au', N'Oceania' UNION ALL
SELECT 15, N'AT', N'Austria', N'Republic of Austria', N'AUT', N'040', N'yes', N'43', N'.at', N'European Union' UNION ALL
SELECT 16, N'AZ', N'Azerbaijan', N'Republic of Azerbaijan', N'AZE', N'031', N'yes', N'994', N'.az', N'Asia' UNION ALL
SELECT 17, N'BS', N'Bahamas', N'Commonwealth of The Bahamas', N'BHS', N'044', N'yes', N'1+242', N'.bs', N'The Caribbean' UNION ALL
SELECT 18, N'BH', N'Bahrain', N'Kingdom of Bahrain', N'BHR', N'048', N'yes', N'973', N'.bh', N'Middle East' UNION ALL
SELECT 19, N'BD', N'Bangladesh', N'People''s Republic of Bangladesh', N'BGD', N'050', N'yes', N'880', N'.bd', N'Asia' UNION ALL
SELECT 20, N'BB', N'Barbados', N'Barbados', N'BRB', N'052', N'yes', N'1+246', N'.bb', N'The Caribbean' UNION ALL
SELECT 21, N'BY', N'Belarus', N'Republic of Belarus', N'BLR', N'112', N'yes', N'375', N'.by', N'Europe' UNION ALL
SELECT 22, N'BE', N'Belgium', N'Kingdom of Belgium', N'BEL', N'056', N'yes', N'32', N'.be', N'European Union' UNION ALL
SELECT 23, N'BZ', N'Belize', N'Belize', N'BLZ', N'084', N'yes', N'501', N'.bz', N'Central America' UNION ALL
SELECT 24, N'BJ', N'Benin', N'Republic of Benin', N'BEN', N'204', N'yes', N'229', N'.bj', N'Africa' UNION ALL
SELECT 25, N'BM', N'Bermuda', N'Bermuda Islands', N'BMU', N'060', N'no', N'1+441', N'.bm', N'North America' UNION ALL
SELECT 26, N'BT', N'Bhutan', N'Kingdom of Bhutan', N'BTN', N'064', N'yes', N'975', N'.bt', N'Asia' UNION ALL
SELECT 27, N'BO', N'Bolivia', N'Plurinational State of Bolivia', N'BOL', N'068', N'yes', N'591', N'.bo', N'South America' UNION ALL
SELECT 28, N'BQ', N'Bonaire, Sint Eustatius and Saba', N'Bonaire, Sint Eustatius and Saba', N'BES', N'535', N'no', N'599', N'.bq', N'The Caribbean' UNION ALL
SELECT 29, N'BA', N'Bosnia and Herzegovina', N'Bosnia and Herzegovina', N'BIH', N'070', N'yes', N'387', N'.ba', N'Europe' UNION ALL
SELECT 30, N'BW', N'Botswana', N'Republic of Botswana', N'BWA', N'072', N'yes', N'267', N'.bw', N'Africa' UNION ALL
SELECT 31, N'BV', N'Bouvet Island', N'Bouvet Island', N'BVT', N'074', N'no', N'NONE', N'.bv', N'Antarctica' UNION ALL
SELECT 32, N'BR', N'Brazil', N'Federative Republic of Brazil', N'BRA', N'076', N'yes', N'55', N'.br', N'South America' UNION ALL
SELECT 33, N'IO', N'British Indian Ocean Territory', N'British Indian Ocean Territory', N'IOT', N'086', N'no', N'246', N'.io', N'Asia' UNION ALL
SELECT 34, N'BN', N'Brunei', N'Brunei Darussalam', N'BRN', N'096', N'yes', N'673', N'.bn', N'Asia' UNION ALL
SELECT 35, N'BG', N'Bulgaria', N'Republic of Bulgaria', N'BGR', N'100', N'yes', N'359', N'.bg', N'European Union' UNION ALL
SELECT 36, N'BF', N'Burkina Faso', N'Burkina Faso', N'BFA', N'854', N'yes', N'226', N'.bf', N'Africa' UNION ALL
SELECT 37, N'BI', N'Burundi', N'Republic of Burundi', N'BDI', N'108', N'yes', N'257', N'.bi', N'Africa' UNION ALL
SELECT 38, N'KH', N'Cambodia', N'Kingdom of Cambodia', N'KHM', N'116', N'yes', N'855', N'.kh', N'Asia' UNION ALL
SELECT 39, N'CM', N'Cameroon', N'Republic of Cameroon', N'CMR', N'120', N'yes', N'237', N'.cm', N'Africa' UNION ALL
SELECT 40, N'CA', N'Canada', N'Canada', N'CAN', N'124', N'yes', N'1', N'.ca', N'North America' UNION ALL
SELECT 41, N'CV', N'Cape Verde', N'Republic of Cape Verde', N'CPV', N'132', N'yes', N'238', N'.cv', N'Africa' UNION ALL
SELECT 42, N'KY', N'Cayman Islands', N'The Cayman Islands', N'CYM', N'136', N'no', N'1+345', N'.ky', N'The Caribbean' UNION ALL
SELECT 43, N'CF', N'Central African Republic', N'Central African Republic', N'CAF', N'140', N'yes', N'236', N'.cf', N'Africa' UNION ALL
SELECT 44, N'TD', N'Chad', N'Republic of Chad', N'TCD', N'148', N'yes', N'235', N'.td', N'Africa' UNION ALL
SELECT 45, N'CL', N'Chile', N'Republic of Chile', N'CHL', N'152', N'yes', N'56', N'.cl', N'South America' UNION ALL
SELECT 46, N'CN', N'China', N'People''s Republic of China', N'CHN', N'156', N'yes', N'86', N'.cn', N'Asia' UNION ALL
SELECT 47, N'CX', N'Christmas Island', N'Christmas Island', N'CXR', N'162', N'no', N'61', N'.cx', N'Oceania' UNION ALL
SELECT 48, N'CC', N'Cocos (Keeling) Islands', N'Cocos (Keeling) Islands', N'CCK', N'166', N'no', N'61', N'.cc', N'Oceania' UNION ALL
SELECT 49, N'CO', N'Colombia', N'Republic of Colombia', N'COL', N'170', N'yes', N'57', N'.co', N'South America' UNION ALL
SELECT 50, N'KM', N'Comoros', N'Union of the Comoros', N'COM', N'174', N'yes', N'269', N'.km', N'Africa'
COMMIT;
RAISERROR (N'[dbo].[MASCountries]: Insert Batch: 1.....Done!', 10, 1) WITH NOWAIT;
GO

BEGIN TRANSACTION;
INSERT INTO [dbo].[MASCountries]([CountryID], [ISO2], [CountryName], [LongCountryName], [ISO3], [NumCode], [UNMemberState], [CallingCode], [CCTLD], [InternationalRegion])
SELECT 51, N'CG', N'Congo', N'Republic of the Congo', N'COG', N'178', N'yes', N'242', N'.cg', N'Africa' UNION ALL
SELECT 52, N'CK', N'Cook Islands', N'Cook Islands', N'COK', N'184', N'some', N'682', N'.ck', N'Oceania' UNION ALL
SELECT 53, N'CR', N'Costa Rica', N'Republic of Costa Rica', N'CRI', N'188', N'yes', N'506', N'.cr', N'Central America' UNION ALL
SELECT 54, N'CI', N'Cote d''ivoire (Ivory Coast)', N'Republic of C&ocirc;te D''Ivoire (Ivory Coast)', N'CIV', N'384', N'yes', N'225', N'.ci', N'Africa' UNION ALL
SELECT 55, N'HR', N'Croatia', N'Republic of Croatia', N'HRV', N'191', N'yes', N'385', N'.hr', N'Europe' UNION ALL
SELECT 56, N'CU', N'Cuba', N'Republic of Cuba', N'CUB', N'192', N'yes', N'53', N'.cu', N'The Caribbean' UNION ALL
SELECT 57, N'CW', N'Curacao', N'Cura&ccedil;ao', N'CUW', N'531', N'no', N'599', N'.cw', N'The Caribbean' UNION ALL
SELECT 58, N'CY', N'Cyprus', N'Republic of Cyprus', N'CYP', N'196', N'yes', N'357', N'.cy', N'European Union' UNION ALL
SELECT 59, N'CZ', N'Czech Republic', N'Czech Republic', N'CZE', N'203', N'yes', N'420', N'.cz', N'European Union' UNION ALL
SELECT 60, N'CD', N'Democratic Republic of the Congo', N'Democratic Republic of the Congo', N'COD', N'180', N'yes', N'243', N'.cd', N'Africa' UNION ALL
SELECT 61, N'DK', N'Denmark', N'Kingdom of Denmark', N'DNK', N'208', N'yes', N'45', N'.dk', N'European Union' UNION ALL
SELECT 62, N'DJ', N'Djibouti', N'Republic of Djibouti', N'DJI', N'262', N'yes', N'253', N'.dj', N'Africa' UNION ALL
SELECT 63, N'DM', N'Dominica', N'Commonwealth of Dominica', N'DMA', N'212', N'yes', N'1+767', N'.dm', N'The Caribbean' UNION ALL
SELECT 64, N'DO', N'Dominican Republic', N'Dominican Republic', N'DOM', N'214', N'yes', N'1+809, 8', N'.do', N'The Caribbean' UNION ALL
SELECT 65, N'EC', N'Ecuador', N'Republic of Ecuador', N'ECU', N'218', N'yes', N'593', N'.ec', N'South America' UNION ALL
SELECT 66, N'EG', N'Egypt', N'Arab Republic of Egypt', N'EGY', N'818', N'yes', N'20', N'.eg', N'Africa' UNION ALL
SELECT 67, N'SV', N'El Salvador', N'Republic of El Salvador', N'SLV', N'222', N'yes', N'503', N'.sv', N'Central America' UNION ALL
SELECT 68, N'GQ', N'Equatorial Guinea', N'Republic of Equatorial Guinea', N'GNQ', N'226', N'yes', N'240', N'.gq', N'Africa' UNION ALL
SELECT 69, N'ER', N'Eritrea', N'State of Eritrea', N'ERI', N'232', N'yes', N'291', N'.er', N'Africa' UNION ALL
SELECT 70, N'EE', N'Estonia', N'Republic of Estonia', N'EST', N'233', N'yes', N'372', N'.ee', N'European Union' UNION ALL
SELECT 71, N'ET', N'Ethiopia', N'Federal Democratic Republic of Ethiopia', N'ETH', N'231', N'yes', N'251', N'.et', N'Africa' UNION ALL
SELECT 72, N'FK', N'Falkland Islands (Malvinas)', N'The Falkland Islands (Malvinas)', N'FLK', N'238', N'no', N'500', N'.fk', N'South America' UNION ALL
SELECT 73, N'FO', N'Faroe Islands', N'The Faroe Islands', N'FRO', N'234', N'no', N'298', N'.fo', N'Europe' UNION ALL
SELECT 74, N'FJ', N'Fiji', N'Republic of Fiji', N'FJI', N'242', N'yes', N'679', N'.fj', N'Oceania' UNION ALL
SELECT 75, N'FI', N'Finland', N'Republic of Finland', N'FIN', N'246', N'yes', N'358', N'.fi', N'European Union' UNION ALL
SELECT 76, N'FR', N'France', N'French Republic', N'FRA', N'250', N'yes', N'33', N'.fr', N'European Union' UNION ALL
SELECT 77, N'GF', N'French Guiana', N'French Guiana', N'GUF', N'254', N'no', N'594', N'.gf', N'South America' UNION ALL
SELECT 78, N'PF', N'French Polynesia', N'French Polynesia', N'PYF', N'258', N'no', N'689', N'.pf', N'Oceania' UNION ALL
SELECT 79, N'TF', N'French Southern Territories', N'French Southern Territories', N'ATF', N'260', N'no', NULL, N'.tf', N'Antartica' UNION ALL
SELECT 80, N'GA', N'Gabon', N'Gabonese Republic', N'GAB', N'266', N'yes', N'241', N'.ga', N'Africa' UNION ALL
SELECT 81, N'GM', N'Gambia', N'Republic of The Gambia', N'GMB', N'270', N'yes', N'220', N'.gm', N'Africa' UNION ALL
SELECT 82, N'GE', N'Georgia', N'Georgia', N'GEO', N'268', N'yes', N'995', N'.ge', N'Asia' UNION ALL
SELECT 83, N'DE', N'Germany', N'Federal Republic of Germany', N'DEU', N'276', N'yes', N'49', N'.de', N'European Union' UNION ALL
SELECT 84, N'GH', N'Ghana', N'Republic of Ghana', N'GHA', N'288', N'yes', N'233', N'.gh', N'Africa' UNION ALL
SELECT 85, N'GI', N'Gibraltar', N'Gibraltar', N'GIB', N'292', N'no', N'350', N'.gi', N'Europe' UNION ALL
SELECT 86, N'GR', N'Greece', N'Hellenic Republic', N'GRC', N'300', N'yes', N'30', N'.gr', N'European Union' UNION ALL
SELECT 87, N'GL', N'Greenland', N'Greenland', N'GRL', N'304', N'no', N'299', N'.gl', N'North America' UNION ALL
SELECT 88, N'GD', N'Grenada', N'Grenada', N'GRD', N'308', N'yes', N'1+473', N'.gd', N'The Caribbean' UNION ALL
SELECT 89, N'GP', N'Guadeloupe', N'Guadeloupe', N'GLP', N'312', N'no', N'590', N'.gp', N'The Caribbean' UNION ALL
SELECT 90, N'GU', N'Guam', N'Guam', N'GUM', N'316', N'no', N'1+671', N'.gu', N'Oceania' UNION ALL
SELECT 91, N'GT', N'Guatemala', N'Republic of Guatemala', N'GTM', N'320', N'yes', N'502', N'.gt', N'Central America' UNION ALL
SELECT 92, N'GG', N'Guernsey', N'Guernsey', N'GGY', N'831', N'no', N'44', N'.gg', N'Europe' UNION ALL
SELECT 93, N'GN', N'Guinea', N'Republic of Guinea', N'GIN', N'324', N'yes', N'224', N'.gn', N'Africa' UNION ALL
SELECT 94, N'GW', N'Guinea-Bissau', N'Republic of Guinea-Bissau', N'GNB', N'624', N'yes', N'245', N'.gw', N'Africa' UNION ALL
SELECT 95, N'GY', N'Guyana', N'Co-operative Republic of Guyana', N'GUY', N'328', N'yes', N'592', N'.gy', N'South America' UNION ALL
SELECT 96, N'HT', N'Haiti', N'Republic of Haiti', N'HTI', N'332', N'yes', N'509', N'.ht', N'The Caribbean' UNION ALL
SELECT 97, N'HM', N'Heard Island and McDonald Islands', N'Heard Island and McDonald Islands', N'HMD', N'334', N'no', N'NONE', N'.hm', N'Antartica' UNION ALL
SELECT 98, N'HN', N'Honduras', N'Republic of Honduras', N'HND', N'340', N'yes', N'504', N'.hn', N'Central America' UNION ALL
SELECT 99, N'HK', N'Hong Kong', N'Hong Kong', N'HKG', N'344', N'no', N'852', N'.hk', N'Asia' UNION ALL
SELECT 100, N'HU', N'Hungary', N'Hungary', N'HUN', N'348', N'yes', N'36', N'.hu', N'European Union'
COMMIT;
RAISERROR (N'[dbo].[MASCountries]: Insert Batch: 2.....Done!', 10, 1) WITH NOWAIT;
GO

BEGIN TRANSACTION;
INSERT INTO [dbo].[MASCountries]([CountryID], [ISO2], [CountryName], [LongCountryName], [ISO3], [NumCode], [UNMemberState], [CallingCode], [CCTLD], [InternationalRegion])
SELECT 101, N'IS', N'Iceland', N'Republic of Iceland', N'ISL', N'352', N'yes', N'354', N'.is', N'Europe' UNION ALL
SELECT 102, N'IN', N'India', N'Republic of India', N'IND', N'356', N'yes', N'91', N'.in', N'Asia' UNION ALL
SELECT 103, N'ID', N'Indonesia', N'Republic of Indonesia', N'IDN', N'360', N'yes', N'62', N'.id', N'Asia' UNION ALL
SELECT 104, N'IR', N'Iran', N'Islamic Republic of Iran', N'IRN', N'364', N'yes', N'98', N'.ir', N'Middle East' UNION ALL
SELECT 105, N'IQ', N'Iraq', N'Republic of Iraq', N'IRQ', N'368', N'yes', N'964', N'.iq', N'Middle East' UNION ALL
SELECT 106, N'IE', N'Ireland', N'Ireland', N'IRL', N'372', N'yes', N'353', N'.ie', N'European Union' UNION ALL
SELECT 107, N'IM', N'Isle of Man', N'Isle of Man', N'IMN', N'833', N'no', N'44', N'.im', N'European Union' UNION ALL
SELECT 108, N'IL', N'Israel', N'State of Israel', N'ISR', N'376', N'yes', N'972', N'.il', N'Middle East' UNION ALL
SELECT 109, N'IT', N'Italy', N'Italian Republic', N'ITA', N'380', N'yes', N'39', N'.jm', N'European Union' UNION ALL
SELECT 110, N'JM', N'Jamaica', N'Jamaica', N'JAM', N'388', N'yes', N'1+876', N'.jm', N'The Caribbean' UNION ALL
SELECT 111, N'JP', N'Japan', N'Japan', N'JPN', N'392', N'yes', N'81', N'.jp', N'Asia' UNION ALL
SELECT 112, N'JE', N'Jersey', N'The Bailiwick of Jersey', N'JEY', N'832', N'no', N'44', N'.je', N'Europe' UNION ALL
SELECT 113, N'JO', N'Jordan', N'Hashemite Kingdom of Jordan', N'JOR', N'400', N'yes', N'962', N'.jo', N'Middle East' UNION ALL
SELECT 114, N'KZ', N'Kazakhstan', N'Republic of Kazakhstan', N'KAZ', N'398', N'yes', N'7', N'.kz', N'Asia' UNION ALL
SELECT 115, N'KE', N'Kenya', N'Republic of Kenya', N'KEN', N'404', N'yes', N'254', N'.ke', N'Africa' UNION ALL
SELECT 116, N'KI', N'Kiribati', N'Republic of Kiribati', N'KIR', N'296', N'yes', N'686', N'.ki', N'Oceania' UNION ALL
SELECT 117, N'XK', N'Kosovo', N'Republic of Kosovo', N'---', N'---', N'some', N'381', N'', N'Europe' UNION ALL
SELECT 118, N'KW', N'Kuwait', N'State of Kuwait', N'KWT', N'414', N'yes', N'965', N'.kw', N'Middle East' UNION ALL
SELECT 119, N'KG', N'Kyrgyzstan', N'Kyrgyz Republic', N'KGZ', N'417', N'yes', N'996', N'.kg', N'Asia' UNION ALL
SELECT 120, N'LA', N'Laos', N'Lao People''s Democratic Republic', N'LAO', N'418', N'yes', N'856', N'.la', N'Asia' UNION ALL
SELECT 121, N'LV', N'Latvia', N'Republic of Latvia', N'LVA', N'428', N'yes', N'371', N'.lv', N'European Union' UNION ALL
SELECT 122, N'LB', N'Lebanon', N'Republic of Lebanon', N'LBN', N'422', N'yes', N'961', N'.lb', N'Middle East' UNION ALL
SELECT 123, N'LS', N'Lesotho', N'Kingdom of Lesotho', N'LSO', N'426', N'yes', N'266', N'.ls', N'Africa' UNION ALL
SELECT 124, N'LR', N'Liberia', N'Republic of Liberia', N'LBR', N'430', N'yes', N'231', N'.lr', N'Africa' UNION ALL
SELECT 125, N'LY', N'Libya', N'Libya', N'LBY', N'434', N'yes', N'218', N'.ly', N'Africa' UNION ALL
SELECT 126, N'LI', N'Liechtenstein', N'Principality of Liechtenstein', N'LIE', N'438', N'yes', N'423', N'.li', N'Europe' UNION ALL
SELECT 127, N'LT', N'Lithuania', N'Republic of Lithuania', N'LTU', N'440', N'yes', N'370', N'.lt', N'European Union' UNION ALL
SELECT 128, N'LU', N'Luxembourg', N'Grand Duchy of Luxembourg', N'LUX', N'442', N'yes', N'352', N'.lu', N'European Union' UNION ALL
SELECT 129, N'MO', N'Macao', N'The Macao Special Administrative Region', N'MAC', N'446', N'no', N'853', N'.mo', N'Asia' UNION ALL
SELECT 130, N'MK', N'Macedonia', N'The Former Yugoslav Republic of Macedonia', N'MKD', N'807', N'yes', N'389', N'.mk', N'Europe' UNION ALL
SELECT 131, N'MG', N'Madagascar', N'Republic of Madagascar', N'MDG', N'450', N'yes', N'261', N'.mg', N'Africa' UNION ALL
SELECT 132, N'MW', N'Malawi', N'Republic of Malawi', N'MWI', N'454', N'yes', N'265', N'.mw', N'Africa' UNION ALL
SELECT 133, N'MY', N'Malaysia', N'Malaysia', N'MYS', N'458', N'yes', N'60', N'.my', N'Asia' UNION ALL
SELECT 134, N'MV', N'Maldives', N'Republic of Maldives', N'MDV', N'462', N'yes', N'960', N'.mv', N'Asia' UNION ALL
SELECT 135, N'ML', N'Mali', N'Republic of Mali', N'MLI', N'466', N'yes', N'223', N'.ml', N'Africa' UNION ALL
SELECT 136, N'MT', N'Malta', N'Republic of Malta', N'MLT', N'470', N'yes', N'356', N'.mt', N'European Union' UNION ALL
SELECT 137, N'MH', N'Marshall Islands', N'Republic of the Marshall Islands', N'MHL', N'584', N'yes', N'692', N'.mh', N'Oceania' UNION ALL
SELECT 138, N'MQ', N'Martinique', N'Martinique', N'MTQ', N'474', N'no', N'596', N'.mq', N'The Caribbean' UNION ALL
SELECT 139, N'MR', N'Mauritania', N'Islamic Republic of Mauritania', N'MRT', N'478', N'yes', N'222', N'.mr', N'Africa' UNION ALL
SELECT 140, N'MU', N'Mauritius', N'Republic of Mauritius', N'MUS', N'480', N'yes', N'230', N'.mu', N'Africa' UNION ALL
SELECT 141, N'YT', N'Mayotte', N'Mayotte', N'MYT', N'175', N'no', N'262', N'.yt', N'Africa' UNION ALL
SELECT 142, N'MX', N'Mexico', N'United Mexican States', N'MEX', N'484', N'yes', N'52', N'.mx', N'Central America' UNION ALL
SELECT 143, N'FM', N'Micronesia', N'Federated States of Micronesia', N'FSM', N'583', N'yes', N'691', N'.fm', N'Oceania' UNION ALL
SELECT 144, N'MD', N'Moldova', N'Republic of Moldova', N'MDA', N'498', N'yes', N'373', N'.md', N'Europe' UNION ALL
SELECT 145, N'MC', N'Monaco', N'Principality of Monaco', N'MCO', N'492', N'yes', N'377', N'.mc', N'Europe' UNION ALL
SELECT 146, N'MN', N'Mongolia', N'Mongolia', N'MNG', N'496', N'yes', N'976', N'.mn', N'Asia' UNION ALL
SELECT 147, N'ME', N'Montenegro', N'Montenegro', N'MNE', N'499', N'yes', N'382', N'.me', N'Europe' UNION ALL
SELECT 148, N'MS', N'Montserrat', N'Montserrat', N'MSR', N'500', N'no', N'1+664', N'.ms', N'The Caribbean' UNION ALL
SELECT 149, N'MA', N'Morocco', N'Kingdom of Morocco', N'MAR', N'504', N'yes', N'212', N'.ma', N'Africa' UNION ALL
SELECT 150, N'MZ', N'Mozambique', N'Republic of Mozambique', N'MOZ', N'508', N'yes', N'258', N'.mz', N'Africa'
COMMIT;
RAISERROR (N'[dbo].[MASCountries]: Insert Batch: 3.....Done!', 10, 1) WITH NOWAIT;
GO

BEGIN TRANSACTION;
INSERT INTO [dbo].[MASCountries]([CountryID], [ISO2], [CountryName], [LongCountryName], [ISO3], [NumCode], [UNMemberState], [CallingCode], [CCTLD], [InternationalRegion])
SELECT 151, N'MM', N'Myanmar (Burma)', N'Republic of the Union of Myanmar', N'MMR', N'104', N'yes', N'95', N'.mm', N'Asia' UNION ALL
SELECT 152, N'NA', N'Namibia', N'Republic of Namibia', N'NAM', N'516', N'yes', N'264', N'.na', N'Africa' UNION ALL
SELECT 153, N'NR', N'Nauru', N'Republic of Nauru', N'NRU', N'520', N'yes', N'674', N'.nr', N'Oceania' UNION ALL
SELECT 154, N'NP', N'Nepal', N'Federal Democratic Republic of Nepal', N'NPL', N'524', N'yes', N'977', N'.np', N'Asia' UNION ALL
SELECT 155, N'NL', N'Netherlands', N'Kingdom of the Netherlands', N'NLD', N'528', N'yes', N'31', N'.nl', N'European Union' UNION ALL
SELECT 156, N'NC', N'New Caledonia', N'New Caledonia', N'NCL', N'540', N'no', N'687', N'.nc', N'Oceania' UNION ALL
SELECT 157, N'NZ', N'New Zealand', N'New Zealand', N'NZL', N'554', N'yes', N'64', N'.nz', N'Oceania' UNION ALL
SELECT 158, N'NI', N'Nicaragua', N'Republic of Nicaragua', N'NIC', N'558', N'yes', N'505', N'.ni', N'Central America' UNION ALL
SELECT 159, N'NE', N'Niger', N'Republic of Niger', N'NER', N'562', N'yes', N'227', N'.ne', N'Africa' UNION ALL
SELECT 160, N'NG', N'Nigeria', N'Federal Republic of Nigeria', N'NGA', N'566', N'yes', N'234', N'.ng', N'Africa' UNION ALL
SELECT 161, N'NU', N'Niue', N'Niue', N'NIU', N'570', N'some', N'683', N'.nu', N'Oceania' UNION ALL
SELECT 162, N'NF', N'Norfolk Island', N'Norfolk Island', N'NFK', N'574', N'no', N'672', N'.nf', N'Oceania' UNION ALL
SELECT 163, N'KP', N'North Korea', N'Democratic People''s Republic of Korea', N'PRK', N'408', N'yes', N'850', N'.kp', N'Asia' UNION ALL
SELECT 164, N'MP', N'Northern Mariana Islands', N'Northern Mariana Islands', N'MNP', N'580', N'no', N'1+670', N'.mp', N'Oceania' UNION ALL
SELECT 165, N'NO', N'Norway', N'Kingdom of Norway', N'NOR', N'578', N'yes', N'47', N'.no', N'Europe' UNION ALL
SELECT 166, N'OM', N'Oman', N'Sultanate of Oman', N'OMN', N'512', N'yes', N'968', N'.om', N'Middle East' UNION ALL
SELECT 167, N'PK', N'Pakistan', N'Islamic Republic of Pakistan', N'PAK', N'586', N'yes', N'92', N'.pk', N'Asia' UNION ALL
SELECT 168, N'PW', N'Palau', N'Republic of Palau', N'PLW', N'585', N'yes', N'680', N'.pw', N'Oceania' UNION ALL
SELECT 169, N'PS', N'Palestine', N'State of Palestine (or Occupied Palestinian Territory)', N'PSE', N'275', N'some', N'970', N'.ps', N'Middle East' UNION ALL
SELECT 170, N'PA', N'Panama', N'Republic of Panama', N'PAN', N'591', N'yes', N'507', N'.pa', N'Central America' UNION ALL
SELECT 171, N'PG', N'Papua New Guinea', N'Independent State of Papua New Guinea', N'PNG', N'598', N'yes', N'675', N'.pg', N'Oceania' UNION ALL
SELECT 172, N'PY', N'Paraguay', N'Republic of Paraguay', N'PRY', N'600', N'yes', N'595', N'.py', N'South America' UNION ALL
SELECT 173, N'PE', N'Peru', N'Republic of Peru', N'PER', N'604', N'yes', N'51', N'.pe', N'South America' UNION ALL
SELECT 174, N'PH', N'Phillipines', N'Republic of the Philippines', N'PHL', N'608', N'yes', N'63', N'.ph', N'Asia' UNION ALL
SELECT 175, N'PN', N'Pitcairn', N'Pitcairn', N'PCN', N'612', N'no', N'NONE', N'.pn', N'Oceania' UNION ALL
SELECT 176, N'PL', N'Poland', N'Republic of Poland', N'POL', N'616', N'yes', N'48', N'.pl', N'European Union' UNION ALL
SELECT 177, N'PT', N'Portugal', N'Portuguese Republic', N'PRT', N'620', N'yes', N'351', N'.pt', N'European Union' UNION ALL
SELECT 178, N'PR', N'Puerto Rico', N'Commonwealth of Puerto Rico', N'PRI', N'630', N'no', N'1+939', N'.pr', N'The Caribbean' UNION ALL
SELECT 179, N'QA', N'Qatar', N'State of Qatar', N'QAT', N'634', N'yes', N'974', N'.qa', N'Middle East' UNION ALL
SELECT 180, N'RE', N'Reunion', N'R&eacute;union', N'REU', N'638', N'no', N'262', N'.re', N'Africa' UNION ALL
SELECT 181, N'RO', N'Romania', N'Romania', N'ROU', N'642', N'yes', N'40', N'.ro', N'European Union' UNION ALL
SELECT 182, N'RU', N'Russia', N'Russian Federation', N'RUS', N'643', N'yes', N'7', N'.ru', N'Europe' UNION ALL
SELECT 183, N'RW', N'Rwanda', N'Republic of Rwanda', N'RWA', N'646', N'yes', N'250', N'.rw', N'Africa' UNION ALL
SELECT 184, N'BL', N'Saint Barthelemy', N'Saint Barth&eacute;lemy', N'BLM', N'652', N'no', N'590', N'.bl', N'The Caribbean' UNION ALL
SELECT 185, N'SH', N'Saint Helena', N'Saint Helena, Ascension and Tristan da Cunha', N'SHN', N'654', N'no', N'290', N'.sh', N'Africa' UNION ALL
SELECT 186, N'KN', N'Saint Kitts and Nevis', N'Federation of Saint Christopher and Nevis', N'KNA', N'659', N'yes', N'1+869', N'.kn', N'The Caribbean' UNION ALL
SELECT 187, N'LC', N'Saint Lucia', N'Saint Lucia', N'LCA', N'662', N'yes', N'1+758', N'.lc', N'The Caribbean' UNION ALL
SELECT 188, N'MF', N'Saint Martin', N'Saint Martin', N'MAF', N'663', N'no', N'590', N'.mf', N'The Caribbean' UNION ALL
SELECT 189, N'PM', N'Saint Pierre and Miquelon', N'Saint Pierre and Miquelon', N'SPM', N'666', N'no', N'508', N'.pm', N'North America' UNION ALL
SELECT 190, N'VC', N'Saint Vincent and the Grenadines', N'Saint Vincent and the Grenadines', N'VCT', N'670', N'yes', N'1+784', N'.vc', N'The Caribbean' UNION ALL
SELECT 191, N'WS', N'Samoa', N'Independent State of Samoa', N'WSM', N'882', N'yes', N'685', N'.ws', N'Oceania' UNION ALL
SELECT 192, N'SM', N'San Marino', N'Republic of San Marino', N'SMR', N'674', N'yes', N'378', N'.sm', N'Europe' UNION ALL
SELECT 193, N'ST', N'Sao Tome and Principe', N'Democratic Republic of S&atilde;o Tom&eacute; and Pr&iacute;ncipe', N'STP', N'678', N'yes', N'239', N'.st', N'Africa' UNION ALL
SELECT 194, N'SA', N'Saudi Arabia', N'Kingdom of Saudi Arabia', N'SAU', N'682', N'yes', N'966', N'.sa', N'Middle East' UNION ALL
SELECT 195, N'SN', N'Senegal', N'Republic of Senegal', N'SEN', N'686', N'yes', N'221', N'.sn', N'Africa' UNION ALL
SELECT 196, N'RS', N'Serbia', N'Republic of Serbia', N'SRB', N'688', N'yes', N'381', N'.rs', N'Europe' UNION ALL
SELECT 197, N'SC', N'Seychelles', N'Republic of Seychelles', N'SYC', N'690', N'yes', N'248', N'.sc', N'Africa' UNION ALL
SELECT 198, N'SL', N'Sierra Leone', N'Republic of Sierra Leone', N'SLE', N'694', N'yes', N'232', N'.sl', N'Africa' UNION ALL
SELECT 199, N'SG', N'Singapore', N'Republic of Singapore', N'SGP', N'702', N'yes', N'65', N'.sg', N'Asia' UNION ALL
SELECT 200, N'SX', N'Sint Maarten', N'Sint Maarten', N'SXM', N'534', N'no', N'1+721', N'.sx', N'The Caribbean'
COMMIT;
RAISERROR (N'[dbo].[MASCountries]: Insert Batch: 4.....Done!', 10, 1) WITH NOWAIT;
GO

BEGIN TRANSACTION;
INSERT INTO [dbo].[MASCountries]([CountryID], [ISO2], [CountryName], [LongCountryName], [ISO3], [NumCode], [UNMemberState], [CallingCode], [CCTLD], [InternationalRegion])
SELECT 201, N'SK', N'Slovakia', N'Slovak Republic', N'SVK', N'703', N'yes', N'421', N'.sk', N'European Union' UNION ALL
SELECT 202, N'SI', N'Slovenia', N'Republic of Slovenia', N'SVN', N'705', N'yes', N'386', N'.si', N'European Union' UNION ALL
SELECT 203, N'SB', N'Solomon Islands', N'Solomon Islands', N'SLB', N'090', N'yes', N'677', N'.sb', N'Oceania' UNION ALL
SELECT 204, N'SO', N'Somalia', N'Somali Republic', N'SOM', N'706', N'yes', N'252', N'.so', N'Africa' UNION ALL
SELECT 205, N'ZA', N'South Africa', N'Republic of South Africa', N'ZAF', N'710', N'yes', N'27', N'.za', N'Africa' UNION ALL
SELECT 206, N'GS', N'South Georgia and the South Sandwich Islands', N'South Georgia and the South Sandwich Islands', N'SGS', N'239', N'no', N'500', N'.gs', N'South America' UNION ALL
SELECT 207, N'KR', N'South Korea', N'Republic of Korea', N'KOR', N'410', N'yes', N'82', N'.kr', N'Asia' UNION ALL
SELECT 208, N'SS', N'South Sudan', N'Republic of South Sudan', N'SSD', N'728', N'yes', N'211', N'.ss', N'Africa' UNION ALL
SELECT 209, N'ES', N'Spain', N'Kingdom of Spain', N'ESP', N'724', N'yes', N'34', N'.es', N'European Union' UNION ALL
SELECT 210, N'LK', N'Sri Lanka', N'Democratic Socialist Republic of Sri Lanka', N'LKA', N'144', N'yes', N'94', N'.lk', N'Asia' UNION ALL
SELECT 211, N'SD', N'Sudan', N'Republic of the Sudan', N'SDN', N'729', N'yes', N'249', N'.sd', N'Africa' UNION ALL
SELECT 212, N'SR', N'Suriname', N'Republic of Suriname', N'SUR', N'740', N'yes', N'597', N'.sr', N'South America' UNION ALL
SELECT 213, N'SJ', N'Svalbard and Jan Mayen', N'Svalbard and Jan Mayen', N'SJM', N'744', N'no', N'47', N'.sj', N'Europe' UNION ALL
SELECT 214, N'SZ', N'Swaziland', N'Kingdom of Swaziland', N'SWZ', N'748', N'yes', N'268', N'.sz', N'Africa' UNION ALL
SELECT 215, N'SE', N'Sweden', N'Kingdom of Sweden', N'SWE', N'752', N'yes', N'46', N'.se', N'European Union' UNION ALL
SELECT 216, N'CH', N'Switzerland', N'Swiss Confederation', N'CHE', N'756', N'yes', N'41', N'.ch', N'Europe' UNION ALL
SELECT 217, N'SY', N'Syria', N'Syrian Arab Republic', N'SYR', N'760', N'yes', N'963', N'.sy', N'Middle East' UNION ALL
SELECT 218, N'TW', N'Taiwan', N'Republic of China (Taiwan)', N'TWN', N'158', N'former', N'886', N'.tw', N'Asia' UNION ALL
SELECT 219, N'TJ', N'Tajikistan', N'Republic of Tajikistan', N'TJK', N'762', N'yes', N'992', N'.tj', N'Asia' UNION ALL
SELECT 220, N'TZ', N'Tanzania', N'United Republic of Tanzania', N'TZA', N'834', N'yes', N'255', N'.tz', N'Africa' UNION ALL
SELECT 221, N'TH', N'Thailand', N'Kingdom of Thailand', N'THA', N'764', N'yes', N'66', N'.th', N'Asia' UNION ALL
SELECT 222, N'TL', N'Timor-Leste (East Timor)', N'Democratic Republic of Timor-Leste', N'TLS', N'626', N'yes', N'670', N'.tl', N'Oceania' UNION ALL
SELECT 223, N'TG', N'Togo', N'Togolese Republic', N'TGO', N'768', N'yes', N'228', N'.tg', N'Africa' UNION ALL
SELECT 224, N'TK', N'Tokelau', N'Tokelau', N'TKL', N'772', N'no', N'690', N'.tk', N'Oceania' UNION ALL
SELECT 225, N'TO', N'Tonga', N'Kingdom of Tonga', N'TON', N'776', N'yes', N'676', N'.to', N'Oceania' UNION ALL
SELECT 226, N'TT', N'Trinidad and Tobago', N'Republic of Trinidad and Tobago', N'TTO', N'780', N'yes', N'1+868', N'.tt', N'The Caribbean' UNION ALL
SELECT 227, N'TN', N'Tunisia', N'Republic of Tunisia', N'TUN', N'788', N'yes', N'216', N'.tn', N'Africa' UNION ALL
SELECT 228, N'TR', N'Turkey', N'Republic of Turkey', N'TUR', N'792', N'yes', N'90', N'.tr', N'Europe' UNION ALL
SELECT 229, N'TM', N'Turkmenistan', N'Turkmenistan', N'TKM', N'795', N'yes', N'993', N'.tm', N'Asia' UNION ALL
SELECT 230, N'TC', N'Turks and Caicos Islands', N'Turks and Caicos Islands', N'TCA', N'796', N'no', N'1+649', N'.tc', N'The Caribbean' UNION ALL
SELECT 231, N'TV', N'Tuvalu', N'Tuvalu', N'TUV', N'798', N'yes', N'688', N'.tv', N'Oceania' UNION ALL
SELECT 232, N'UG', N'Uganda', N'Republic of Uganda', N'UGA', N'800', N'yes', N'256', N'.ug', N'Africa' UNION ALL
SELECT 233, N'UA', N'Ukraine', N'Ukraine', N'UKR', N'804', N'yes', N'380', N'.ua', N'Europe' UNION ALL
SELECT 234, N'AE', N'United Arab Emirates', N'United Arab Emirates', N'ARE', N'784', N'yes', N'971', N'.ae', N'Middle East' UNION ALL
SELECT 235, N'GB', N'United Kingdom', N'United Kingdom of Great Britain and Nothern Ireland', N'GBR', N'826', N'yes', N'44', N'.uk', N'European Union' UNION ALL
SELECT 236, N'US', N'United States', N'United States of America', N'USA', N'840', N'yes', N'1', N'.us', N'North America' UNION ALL
SELECT 237, N'UM', N'United States Minor Outlying Islands', N'United States Minor Outlying Islands', N'UMI', N'581', N'no', N'NONE', N'NONE', N'Oceania' UNION ALL
SELECT 238, N'UY', N'Uruguay', N'Eastern Republic of Uruguay', N'URY', N'858', N'yes', N'598', N'.uy', N'South America' UNION ALL
SELECT 239, N'UZ', N'Uzbekistan', N'Republic of Uzbekistan', N'UZB', N'860', N'yes', N'998', N'.uz', N'Asia' UNION ALL
SELECT 240, N'VU', N'Vanuatu', N'Republic of Vanuatu', N'VUT', N'548', N'yes', N'678', N'.vu', N'Oceania' UNION ALL
SELECT 241, N'VA', N'Vatican City', N'State of the Vatican City', N'VAT', N'336', N'no', N'39', N'.va', N'Europe' UNION ALL
SELECT 242, N'VE', N'Venezuela', N'Bolivarian Republic of Venezuela', N'VEN', N'862', N'yes', N'58', N'.ve', N'South America' UNION ALL
SELECT 243, N'VN', N'Vietnam', N'Socialist Republic of Vietnam', N'VNM', N'704', N'yes', N'84', N'.vn', N'Asia' UNION ALL
SELECT 244, N'VG', N'Virgin Islands, British', N'British Virgin Islands', N'VGB', N'092', N'no', N'1+284', N'.vg', N'The Caribbean' UNION ALL
SELECT 245, N'VI', N'Virgin Islands, US', N'Virgin Islands of the United States', N'VIR', N'850', N'no', N'1+340', N'.vi', N'The Caribbean' UNION ALL
SELECT 246, N'WF', N'Wallis and Futuna', N'Wallis and Futuna', N'WLF', N'876', N'no', N'681', N'.wf', N'Oceania' UNION ALL
SELECT 247, N'EH', N'Western Sahara', N'Western Sahara', N'ESH', N'732', N'no', N'212', N'.eh', N'Africa' UNION ALL
SELECT 248, N'YE', N'Yemen', N'Republic of Yemen', N'YEM', N'887', N'yes', N'967', N'.ye', N'Middle East' UNION ALL
SELECT 249, N'ZM', N'Zambia', N'Republic of Zambia', N'ZMB', N'894', N'yes', N'260', N'.zm', N'Africa' UNION ALL
SELECT 250, N'ZW', N'Zimbabwe', N'Republic of Zimbabwe', N'ZWE', N'716', N'yes', N'263', N'.zw', N'Africa'
COMMIT;
RAISERROR (N'[dbo].[MASCountries]: Insert Batch: 5.....Done!', 10, 1) WITH NOWAIT;
GO
