/**
 * @file App.js
 * @author Carl Nicolas Mendoza
 * @id 301386435
 * @date 2024-10-11
 * @description Displays all the components, styles, and layouts of the webapp.
 * 
 * @returns {App}
 */
import { Route, Routes } from 'react-router-dom';
import { Helmet } from 'react-helmet';

// CSS
import './App.css';

// Layout
import Navigation from './components/layout/Navigation';
import Footer from './components/layout/Footer';

// Pages
import Home from './components/Home';
import About from './components/About';
import Register from './components/Register';
import Login from './components/Login';
<<<<<<< HEAD
import TicketForm from './components/TicketForm';
import MyTickets from './components/MyTickets';
import Services from './components/Services';
import TicketInfo from './components/Ticket/TicketInfo';

=======
import TicketForm from './components/Ticket/TicketForm';
import MyTickets from './components/MyTickets';
import Services from './components/Services';
import TicketInfo from './components/Ticket/TicketInfo';
import Announcement from './components/Announcement';
import EditTicket from './components/Ticket/EditTicket';
>>>>>>> origin/master

function App() {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Ticket Master</title>
        <meta name="description" content="Help Desk Website by Carl Nicolas Mendoza" />
      </Helmet>
      <Navigation />
      <main>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/mytickets" element={<MyTickets />} />
            <Route path="/services" element={<Services />} />
<<<<<<< HEAD
            <Route path="/ticketform" elmeent={<TicketForm />} />
            <Route path="/ticketinfo/:id" element={<TicketInfo />} />
=======
            <Route path="/ticketform" element={<TicketForm />} />
            <Route path="/ticketinfo/:id" element={<TicketInfo />} />
            <Route path="/editticket/:id" element={<EditTicket />} />
            <Route path="/announcement" element={<Announcement />} />
>>>>>>> origin/master
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
