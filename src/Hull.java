import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import quickhull3d.Point3d;
import quickhull3d.QuickHull3D;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;

public class Hull extends HttpServlet{
	private static final long serialVersionUID = 1L;
	public Point3d[] points;
	Point3d[] vertices;
	int[][] faceIndices;
	
	public Hull() {
		super();
	}
	
	protected void doGet(HttpServletRequest request, HttpServletResponse response) {
	
	}
	
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws IOException{
		double x, y, z;
		/* try {
			// while(request.getParameter("coordinates[0][particleCount]") == null)
			// {}
			int num = Integer.parseInt(request.getParameter("coordinates[0][particleCount]"));
		} catch(Exception e) {
			System.out.println("Error here");
		} */
			points = new Point3d[500];
			for(int i=0; i<500; i++)
			{
				x = Double.parseDouble(request.getParameter("coordinates[" + i + "][x]"));
				y = Double.parseDouble(request.getParameter("coordinates[" + i + "][y]"));
				z = Double.parseDouble(request.getParameter("coordinates[" + i + "][z]"));
				//System.out.println(x + " " + y + " " + z);
				points[i] = new Point3d( x, y, z );
			}
		
		QuickHull3D hull = new QuickHull3D( );
		hull.build( points );
		vertices = hull.getVertices( );
		faceIndices = hull.getFaces( );
		
		JSONObject json = new JSONObject( );
		JSONArray coordinates = new JSONArray( );
		JSONObject coordinate;
		
		int count = vertices.length;
		
		for(int i=0; i<count; i++)
		{
			coordinate = new JSONObject( );
			coordinate.put( "x", vertices[i].x );
			coordinate.put( "y", vertices[i].y );
			coordinate.put( "z", vertices[i].z );
			//System.out.println(vertices[i].x + " " + vertices[i].y + " " + vertices[i].z);
			coordinates.add( coordinate );
		}
		
		json.put( "coordinates", coordinates );
		
		JSONArray faces = new JSONArray( );
		JSONObject face;
		
		int flength = faceIndices.length;
		for(int i=0; i<faceIndices.length; i++)
		{
			int k = 0;
			face = new JSONObject( );
			if( faceIndices[i].length == 3 )
			{
				face.put( "f1", faceIndices[i][k] );
				face.put( "f2", faceIndices[i][k+1] );
				face.put( "f3", faceIndices[i][k+2] );
			}
			else
			{
				face.put( "f1", faceIndices[i][k] );
				face.put( "f2", faceIndices[i][k+1] );
				face.put( "f3", faceIndices[i][k+2] );
				face.put( "f4", faceIndices[i][k+3] );
			}
			faces.add( face );
		}
		
		json.put( "faces", faces );
		json.put( "vlength", count );
		json.put( "flength", flength );
		
		response.setCharacterEncoding( "UTF-8" );
		response.setContentType( "application/json" );
		//try{
			PrintWriter out = response.getWriter( );
			out.write( json.toString( ) );
			out.close();
		//}catch(IOException e){
		//		e.printStackTrace();
		//}
	}
}
