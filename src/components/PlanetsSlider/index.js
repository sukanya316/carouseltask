import {useForm} from 'react-hook-form'
import {yupResolver} from '@hookform/resolvers/yup'
import * as Yup from 'yup'
import 'yup-phone'

import './index.css'

const schema = Yup.object().shape({
  name: Yup.string().required('name required'),
  dob: Yup.string().required(),
  sex: Yup.string().required(),
  mobile: Yup.string().test(val => {
    if (val !== '') {
      const regx = '^(+91[-s]?)?[0]?(91)?[789]d{9}$'
      if (Yup.string().matches(regx)) {
        return 'Valid'
      }
      return 'Invalid'
    }
    return ''
  }),
  idType: Yup.string().optional(),
  govtId: Yup.string().test(val => {
    if (val !== '') {
      const id = Yup.ref('idType')
      console.log(id)
      return id === 'Aadhar'
        ? Yup.string().matches('^[2-9]{1}[0-9]{3}\\s[0-9]{4}\\s[0-9]{4}$')
        : Yup.string()
            .min(10, 'You need to be older than 10 to register')
            .required()
    }
    return Yup.string()
      .min(10, 'You need to be older than 10 to register')
      .optional()
  }),

  // mobile: Yup.string().matches(
  //   /(\+91\ )[6-9]{1}[0-9 ]{4}[0-9 ]{4}[0-9]{3}/,
  //   'Phone number is not valid',
  // ),

  //   mobile: Yup.string().matches(/^[6-9]d{9}$/, {
  //     message: 'Please enter valid number.',
  //     excludeEmptyString: false,
  //   }),
  //   idType: Yup.string(),
  //   govtId: Yup.number().min(10),
})

const PlanetsSlider = () => {
  console.log('dd')
  const {
    register,
    handleSubmit,
    formState: {errors},
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  })

  const onSubmitHandler = data => {
    console.log(data)
    reset()
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmitHandler)}>
        <h2>Personal Details</h2>
        <div className="items-container">
          <div className="item-container">
            <label htmlFor="name">Name*</label>
            <input
              {...register('name')}
              type="text"
              placeholder="Enter Name"
              id="name"
              required
            />
            <p>{errors.name?.message}</p>
          </div>

          <div className="item-container">
            <label htmlFor="dob-age">Date of Birth or Age*</label>
            <input
              {...register('dob')}
              type="text"
              placeholder="DD/MM/YYYY or age in years"
              id="dob-age"
              required
            />
            <p>{errors.dob?.message}</p>
          </div>

          <div className="item-container">
            <label htmlFor="sex">
              Sex<sup>*</sup>
            </label>
            <select
              {...register('sex')}
              id="sex"
              placeholder="Enter Sex"
              defaultValue=""
              required
            >
              <option value="" disabled hidden>
                --
              </option>
              <option>Male</option>
              <option>Female</option>
            </select>
            <p>{errors.sex?.message}</p>
          </div>

          <div className="item-container">
            <label htmlFor="mobile">Mobile</label>
            <input
              {...register('mobile')}
              type="string"
              placeholder="Enter Mobile"
              id="mobile"
            />
            {/* <p>{errors.mobile?.message}</p> */}
          </div>

          <div className="item-container">
            <label htmlFor="govt-id-type">Govt Issued ID</label>
            <select {...register('idType')} id="govt-id-type" defaultValue="">
              <option value="" disabled hidden>
                --
              </option>
              <option>Aadhar</option>
              <option>PAN</option>
            </select>
            <input
              {...register('govtId')}
              type="text"
              placeholder="Enter Govt ID"
              id="govt-id"
            />
            <p>{errors.govtId?.message}</p>
          </div>
        </div>
        <h2>Contact Details</h2>

        <label htmlFor="guardian">Guardian Details</label>
        <select
          defaultValue=""
          placeholder="Select guardian"
          {...register('guardian')}
          id="guardian"
        >
          <option value="" disabled hidden>
            --
          </option>
          <option>Father</option>
          <option>Mother</option>
          <option>Sister</option>
          <option>Brother</option>
          <option>Grand Mother</option>
          <option>Grand Father</option>
        </select>
        <input
          {...register('guardianName')}
          placeholder="Enter Guardian Name"
          id="guardian-name"
        />

        <label htmlFor="email">Email</label>
        <input
          {...register('email')}
          type="email"
          placeholder="Enter Email"
          id="email"
        />

        <label htmlFor="emergency-no">Emergency Contact Number</label>
        <input
          {...register('emergencyContact')}
          placeholder="Enter Emergency Mobile No"
          id="emergency-no"
        />

        <h2>Address Details</h2>
        <label htmlFor="address">Address</label>
        <input
          {...register('address')}
          type="text"
          placeholder="Enter Address"
          id="address"
        />

        <label htmlFor="city">City</label>
        <select {...register('city')} defaultValue="">
          <option value="" disabled hidden>
            --
          </option>
        </select>

        <label htmlFor="country">Country</label>
        <input
          {...register('country')}
          type="text"
          id="country"
          placeholder="Enter Country"
        />

        <label htmlFor="pincode">Pincode</label>
        <input
          {...register('pincode')}
          type="number"
          placeholder="Enter PINcode"
          id="pincode"
        />

        <h2>Other Details</h2>
        <label htmlFor="occupation">Occupation</label>
        <input
          {...register('occupation')}
          type="text"
          placeholder="Enter Occupation"
          id="occupation"
        />

        <label htmlFor="religion">Religion</label>
        <input
          {...register('religion')}
          type="text"
          placeholder="Enter Religion"
          id="religion"
        />

        <label htmlFor="marital">Marital Status</label>
        <select {...register('maritalStatus')} defaultValue="" id="marital">
          <option value="" disabled hidden>
            --
          </option>
          <option>Married</option>
          <option>Un Married</option>
        </select>

        <label htmlFor="blood-group">Blood Group</label>
        <select {...register('bloodGroup')} defaultValue="" id="blood-group">
          <option value="" disabled hidden>
            --
          </option>
          <option>A+</option>
          <option>`B-`</option>
          <option>O+</option>
          <option>`O-`</option>
          <option>AB+</option>
          <option>`AB-`</option>
        </select>

        <label htmlFor="nation">Nationality</label>
        <input
          {...register('nationality')}
          type="text"
          placeholder="Enter Nation"
          id="nation"
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default PlanetsSlider
