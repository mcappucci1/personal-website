import { CustomNavbar } from './CustomNavbar';

export const App = () => {
    return (
        <>
            <CustomNavbar />
            <div className='h-75 d-flex justify-content-center align-items-center'>
                <div className='h-75 w-75'>
                    <h5 className='text-blue'>Hi, my name is</h5>
                    <h1 className='display-1 text-gray'>Matthew Cappucci.</h1>
                    <h1 className='display-1 text-dark-gray mb-5'>I build dumb software projects.</h1>
                    <h5 className='text-gray'>
                        I am a recent graudate software engineer who specializes <br />
                        in building web based projects. I am current focusing my <br />
                        efforts towards expanding my skills into technologies outside <br />
                        web development (i.e. machine learning)
                    </h5>
                </div>
            </div>
        </>
    );
}