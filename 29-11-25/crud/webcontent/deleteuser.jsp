<%@ page import="com.javatpoint.dao.UserDao" %>
<%@ page import="com.javatpoint.bean.User" %>
<%@ page contentType="text/html; charset=UTF-8" %>

<jsp:useBean id="u" class="com.javatpoint.bean.User" scope="request"/>
<jsp:setProperty name="u" property="*"/>

<%
try {
    UserDao.delete(u);
} catch (Exception e) {
    e.printStackTrace();
}
response.sendRedirect("viewusers.jsp");
%>
