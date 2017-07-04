package common;

import java.io.BufferedReader;
import java.io.FileReader;
import java.sql.*;
import java.util.*;

public class JDBCTemp {
	public static Connection getConnection() {
		Connection con = null;
		Properties prop = new Properties();
		try {
			prop.load(new BufferedReader(new FileReader("Driver.properties")));
			Class.forName(prop.getProperty("driver"));
			con = DriverManager.getConnection(
					prop.getProperty("url"),
					prop.getProperty("user"),
					prop.getProperty("pwd"));
		} catch (Exception e) {
			e.printStackTrace();
		}
		return con;
	}

	public static void close(Connection con) {
		try {
			if (!con.isClosed()) {
				con.close();
			}
		} catch (SQLException e) {
			e.printStackTrace();
		}
	}

	public static void close(Statement stmt) {
		try {
			if (!stmt.isClosed() && stmt != null) {
				stmt.close();
			}
		} catch (SQLException e) {
			e.printStackTrace();
		}
	}

	public static void close(ResultSet rset) {
		try {
			if (!rset.isClosed() && rset != null) {
				rset.close();
			}
		} catch (SQLException e) {
			e.printStackTrace();
		}
	}

	public static void commit(Connection con) {
		try {
			if (!con.isClosed() && con != null) {
				con.commit();
			}
		} catch (SQLException e) {
			e.printStackTrace();
		}
	}

	public static void rollback(Connection con) {
		try {
			if (!con.isClosed() && con != null) {
				con.rollback();
			}
		} catch (SQLException e) {
			e.printStackTrace();
		}
	}
}
