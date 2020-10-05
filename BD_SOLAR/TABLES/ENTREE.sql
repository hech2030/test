IF (NOT EXISTS (SELECT * FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_SCHEMA = 'dbo' AND  TABLE_NAME = 'ENTREE'))
BEGIN
	CREATE TABLE [dbo].[ENTREE](
		[Id] [BIGINT] NOT NULL,
		[numEntree] [BIGINT] NULL,
		[quantite] [BIGINT] NULL,
		[dateEntree] [DATETIME] NULL,
		[prixDentree] [BIGINT] NULL,
		[IdArticle] [BIGINT] NOT NULL
	 CONSTRAINT [PK_ENTREE] PRIMARY KEY CLUSTERED 
	(
		[Id] ASC
	)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
	) ON [PRIMARY]
END
GO
