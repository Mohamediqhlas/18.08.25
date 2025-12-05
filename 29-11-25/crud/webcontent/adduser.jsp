<%@ page import="com.javatpoint.dao.UserDao" %>
<%@ page import="com.javatpoint.bean.User" %>
<%@ page contentType="text/html; charset=UTF-8" %>

<jsp:useBean id="u" class="com.javatpoint.bean.User" scope="request"/>
<jsp:setProperty name="u" property="*"/>

<%
int i = 0;
try {
    i = UserDao.save(u);
    if (i > 0) {
        response.sendRedirect("adduser-success.jsp");
    } else {
        response.sendRedirect("adduser-error.jsp");
    }
} catch(Exception e) {
    // Log the error (server logs)
    e.printStackTrace();
    response.sendRedirect("adduser-error.jsp");
}
%>
