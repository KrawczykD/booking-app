<%@ Page Language="C#" AutoEventWireup="true" CodeFile="Default.aspx.cs" Inherits="{THIS MUST BE UPDATED FROM BOPR BEFORE RELEASE}" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
	<head runat="server">
		<!-- build:htmlHead -->
		<!-- endbuild -->
	</head>
	<body>
		<form id="form1" runat="server"></form>
		<!-- build:app -->
		<!-- endbuild -->

		<!-- build:cdn -->
		<!-- endbuild -->

		<!-- BOPR set variables -->
		<script type="text/javascript">
			var bopr_api_endpoint = "<%=_endpoint%>";
			var bopr_api_token = "<%=_token%>";
		</script>
		
        <!-- build:scripts -->
		<!-- endbuild -->
	</body>
</html>