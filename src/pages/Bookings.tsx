import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { CalendarDays, Clock, MapPin, Trash2 } from 'lucide-react';
import { Layout } from '@/components/layout/Layout';
import { useAuth } from '@/lib/auth';
import { useDatabase, Booking, BookingStatus, PaymentStatus } from '@/lib/database';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { useToast } from '@/components/ui/use-toast';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';

export default function Bookings() {
  const { isAuthenticated, user } = useAuth();
  const { getUserBookings, updateBooking, getHajjPackage, getUmrahPackage } = useDatabase();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [bookings, setBookings] = useState<Booking[]>([]);
  
  // Redirect if not logged in
  useEffect(() => {
    if (!isAuthenticated || !user) {
      navigate('/login');
    } else {
      const userBookings = getUserBookings(user.id);
      setBookings(userBookings);
    }
  }, [isAuthenticated, user, navigate, getUserBookings]);
  
  const handleCancelBooking = (bookingId: string) => {
    const updatedBooking = updateBooking(bookingId, { status: 'cancelled' });
    
    if (updatedBooking) {
      // Update local state
      setBookings(prevBookings => 
        prevBookings.map(booking => 
          booking.id === bookingId ? updatedBooking : booking
        )
      );
      
      toast({
        title: "Booking cancelled",
        description: "Your booking has been cancelled successfully",
      });
    } else {
      toast({
        variant: "destructive",
        title: "Action failed",
        description: "Failed to cancel booking. Please try again.",
      });
    }
  };
  
  const getPackageName = (booking: Booking) => {
    if (booking.packageType === 'hajj') {
      return getHajjPackage(booking.packageId)?.name || 'Unknown Package';
    } else {
      return getUmrahPackage(booking.packageId)?.name || 'Unknown Package';
    }
  };
  
  const getPackageDetails = (booking: Booking) => {
    if (booking.packageType === 'hajj') {
      const package_ = getHajjPackage(booking.packageId);
      return package_ ? {
        price: package_.price,
        duration: package_.duration,
        departureDate: package_.departureDate,
        location: 'Makkah & Madinah'
      } : null;
    } else {
      const package_ = getUmrahPackage(booking.packageId);
      return package_ ? {
        price: package_.price,
        duration: package_.duration,
        departureDate: 'Flexible',
        location: 'Makkah & Madinah'
      } : null;
    }
  };
  
  const renderStatusBadge = (status: BookingStatus) => {
    switch(status) {
      case 'confirmed':
        return <Badge className="bg-green-500">Confirmed</Badge>;
      case 'pending':
        return <Badge variant="outline" className="text-yellow-600 border-yellow-600">Pending</Badge>;
      case 'cancelled':
        return <Badge variant="destructive">Cancelled</Badge>;
      case 'completed':
        return <Badge className="bg-blue-500">Completed</Badge>;
      default:
        return <Badge variant="outline">Unknown</Badge>;
    }
  };
  
  const renderPaymentBadge = (status: PaymentStatus) => {
    switch(status) {
      case 'paid':
        return <Badge className="bg-green-500">Paid</Badge>;
      case 'partial':
        return <Badge variant="outline" className="text-amber-600 border-amber-600">Partial</Badge>;
      case 'unpaid':
        return <Badge variant="outline" className="text-red-500 border-red-500">Unpaid</Badge>;
      default:
        return <Badge variant="outline">Unknown</Badge>;
    }
  };

  return (
    <>
      <Helmet>
        <title>My Bookings | MabrurX</title>
      </Helmet>
      <Layout>
        <div className="container max-w-screen-xl mx-auto px-4 py-12">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-primary">My Bookings</h1>
            <p className="text-muted-foreground">Manage your Hajj and Umrah bookings</p>
          </div>
          
          {bookings.length === 0 ? (
            <div className="text-center py-16 bg-muted/20 rounded-lg">
              <h3 className="text-xl font-medium">No bookings found</h3>
              <p className="text-muted-foreground mt-2">You haven't made any bookings yet.</p>
              <Button className="mt-4" onClick={() => navigate('/')}>
                Explore Packages
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-6">
              {bookings.map(booking => {
                const packageDetails = getPackageDetails(booking);
                return (
                  <Card key={booking.id} className={booking.status === 'cancelled' ? 'opacity-75' : ''}>
                    <CardHeader className="flex flex-row items-start justify-between">
                      <div>
                        <CardTitle className="text-xl">{getPackageName(booking)}</CardTitle>
                        <CardDescription>
                          Booking ID: {booking.id.substring(0, 8)}...
                        </CardDescription>
                      </div>
                      <div className="flex gap-2">
                        {renderStatusBadge(booking.status)}
                        {renderPaymentBadge(booking.paymentStatus)}
                      </div>
                    </CardHeader>
                    <CardContent>
                      {packageDetails && (
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                          <div className="flex items-center gap-2">
                            <Clock className="h-5 w-5 text-muted-foreground" />
                            <span>{packageDetails.duration} days</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <CalendarDays className="h-5 w-5 text-muted-foreground" />
                            <span>{packageDetails.departureDate}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <MapPin className="h-5 w-5 text-muted-foreground" />
                            <span>{packageDetails.location}</span>
                          </div>
                        </div>
                      )}
                      
                      <Separator className="my-4" />
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <p className="text-sm text-muted-foreground">Booked on</p>
                          <p>{new Date(booking.bookingDate).toLocaleDateString()}</p>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">Payment amount</p>
                          <p>${booking.paymentAmount.toLocaleString()}</p>
                        </div>
                      </div>
                      
                      {booking.notes && (
                        <div className="mt-4 p-3 bg-muted rounded-md">
                          <p className="text-sm text-muted-foreground">Notes</p>
                          <p>{booking.notes}</p>
                        </div>
                      )}
                    </CardContent>
                    <CardFooter className="justify-between">
                      <Button 
                        variant="outline"
                        onClick={() => {
                          if (booking.packageType === 'hajj') {
                            navigate(`/hajj#${booking.packageId}`);
                          } else {
                            navigate(`/umrah#${booking.packageId}`);
                          }
                        }}
                      >
                        View Package
                      </Button>
                      
                      {booking.status !== 'cancelled' && booking.status !== 'completed' && (
                        <AlertDialog>
                          <AlertDialogTrigger asChild>
                            <Button variant="destructive">
                              <Trash2 className="h-4 w-4 mr-2" />
                              Cancel
                            </Button>
                          </AlertDialogTrigger>
                          <AlertDialogContent>
                            <AlertDialogHeader>
                              <AlertDialogTitle>Cancel Booking</AlertDialogTitle>
                              <AlertDialogDescription>
                                Are you sure you want to cancel this booking? This action cannot be undone.
                              </AlertDialogDescription>
                            </AlertDialogHeader>
                            <AlertDialogFooter>
                              <AlertDialogCancel>Keep Booking</AlertDialogCancel>
                              <AlertDialogAction
                                onClick={() => handleCancelBooking(booking.id)}
                                className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
                              >
                                Yes, Cancel
                              </AlertDialogAction>
                            </AlertDialogFooter>
                          </AlertDialogContent>
                        </AlertDialog>
                      )}
                    </CardFooter>
                  </Card>
                );
              })}
            </div>
          )}
        </div>
      </Layout>
    </>
  );
}