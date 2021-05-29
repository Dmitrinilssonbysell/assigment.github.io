import React, { useState, useEffect } from "react"
import axios from "axios"
import {
    ImageFunc
} from "./Image"

const ListBox = (props) => {
    return(
        <div className="list-box">
            {props.item}
        </div>
    )
}


const List = (props) => {
    return(
        <div className={props.className}>
            <div className="desc-section">
                <label>Name</label>
                {props.name}
            </div>
            <div className="desc-section">
                <label>Gender</label>
                {props.gender}
            </div>
            <div className="desc-section">
                <label>Birth Year</label>
                {props.birthYear}
            </div>
            <div className="desc-section">
                <label>Eye Color</label>
                {props.eyeColor}
            </div>
            <div className="desc-section">
                <label>Hair Color</label>
                {props.hairColor}
            </div>
            <div className="desc-section">
                <label>Skin Color</label>
                {props.skinColor}
            </div>
            <div className="desc-section">
                <label>Height</label>
                {props.height}
            </div>
            <div className="desc-section">
                <label>Mass</label>
                {props.mass}
            </div>
        </div>
    )
}

const Assigment = () => {
    const api2 = "people" // More pages 9
    var [index, SetIndex] = useState(1)
    var pageIndex = index // Toggle page
    const page = `/?page=${pageIndex}`
    const [dataArray, SetDataArray] = useState([])

    var [listArray1, SetListArray1] = useState([])
    var [listArray2, SetListArray2] = useState([])
    var [listArray3, SetListArray3] = useState([])
    var [listArray4, SetListArray4] = useState([])
    var [listArray5, SetListArray5] = useState([])
    var [listArray6, SetListArray6] = useState([])
    var [listArray7, SetListArray7] = useState([])
    var [listArray8, SetListArray8] = useState([])
    var [listArray9, SetListArray9] = useState([])
    var [input, SetInput] = useState("")

    var [nextCount, SetNextCount] = useState(index + 1)
    var [startCount, SetStartCount] = useState(index)
    
    var [style, SetStyle] = useState("list-hidden")
    var [contentStyle, SetContentStyle] = useState("content-image")

    var [image, SetImage] = useState("")
    var [imageClass, SetImageClass] = useState("")

    var [closeBtn, SetCloseBtn] = useState("close-btn-hidden")

    var [birthYear, SetBirthYear] = useState("")
    var [eyeColor, SetEyeColor] = useState("")
    var [hairColor, SetHairColor] = useState("")
    var [skinColor, SetSkinColor] = useState("")
    var [mass, SetMass] = useState("")
    var [height, SetHeight] = useState("")
    var [gender, SetGender] = useState("")
    var [name, SetName] = useState("")
    
    useEffect(() => {
        axios.get(`https://swapi.dev/api/${api2}${page}`)
        .then(res => {
            SetDataArray(res.data.results)
        })
    }, [index, page])
    
    function handleClick(item, index) {
        SetContentStyle("content-image-hidden")
        SetStyle("list-desc-content")
        SetBirthYear(
            <p className="desc-text">
                : {item.birth_year}
            </p>
        )
        SetEyeColor(
            <p className="desc-text">
                : {item.eye_color}
            </p>
        )
        SetHairColor(
            <p className="desc-text">
                : {item.hair_color}
            </p>
        )
        SetSkinColor(
            <p className="desc-text">
                : {item.skin_color}
            </p>
        )
        SetHeight(
            <p className="desc-text">
                : {item.height}
            </p>
        )
        SetMass(
            <p className="desc-text">
                : {item.mass}
            </p>
        )
        SetGender(
            <p className="desc-text">
                : {item.gender}
            </p>
        )
        SetName(
            <p className="desc-text">
                : {item.name}
            </p>
        )

        const displayImage = ImageFunc(item.name)
        if (displayImage === ImageFunc(item.name)) {
            SetImage(displayImage)
            SetImageClass("image")
        }

        SetCloseBtn("close-btn")
    }
    
    const handleNavStart = () => {
        if (startCount > 1) {
            SetIndex(index - 1)
            SetStartCount(index - 1)
            SetNextCount(nextCount - 1)
        }
    }
    const handleNavNext = () => {
        if (nextCount < 10) {
            SetIndex(index + 1)
            SetStartCount(index + 1)
            SetNextCount(nextCount + 1)
        }
    }

    const handleCloseContent = () => {
        SetContentStyle("content-image")
        SetStyle("list-hidden")
        SetCloseBtn("close-btn-hidden")
        SetImage("")
        SetImageClass("")
    }

    useEffect(() => {
        axios.get(`https://swapi.dev/api/people/?page=1`) 
        .then(res => {
            SetListArray1(res.data.results)
        })
    }, [])
    useEffect(() => {
        axios.get(`https://swapi.dev/api/people/?page=2`) 
        .then(res => {
            SetListArray2(res.data.results)
        })
    }, [])
    useEffect(() => {
        axios.get(`https://swapi.dev/api/people/?page=3`) 
        .then(res => {
            SetListArray3(res.data.results)
        })
    }, [])
    useEffect(() => {
        axios.get(`https://swapi.dev/api/people/?page=4`) 
        .then(res => {
            SetListArray4(res.data.results)
        })
    }, [])
    useEffect(() => {
        axios.get(`https://swapi.dev/api/people/?page=5`) 
        .then(res => {
            SetListArray5(res.data.results)
        })
    }, [])
    useEffect(() => {
        axios.get(`https://swapi.dev/api/people/?page=6`) 
        .then(res => {
            SetListArray6(res.data.results)
        })
    }, [])
    useEffect(() => {
        axios.get(`https://swapi.dev/api/people/?page=7`) 
        .then(res => {
            SetListArray8(res.data.results)
        })
    }, [])
    useEffect(() => {
        axios.get(`https://swapi.dev/api/people/?page=8`) 
        .then(res => {
            SetListArray7(res.data.results)
        })
    }, [])
    useEffect(() => {
        axios.get(`https://swapi.dev/api/people/?page=9`) 
        .then(res => {
            SetListArray9(res.data.results)
        })
    }, [])

    const handleInput = (e) => {
        e.preventDefault()
        SetInput(input = e.target.value)
    }
    
    if (input.length > 0) {
        listArray1 = listArray1.filter((i) => {
            return i.name.toLocaleLowerCase().match(input)
        })
        listArray2 = listArray2.filter((i) => {
            return i.name.toLocaleLowerCase().match(input)
        })
        listArray3 = listArray3.filter((i) => {
            return i.name.toLocaleLowerCase().match(input)
        })
        listArray4 = listArray4.filter((i) => {
            return i.name.toLocaleLowerCase().match(input)
        })
        listArray5 = listArray5.filter((i) => {
            return i.name.toLocaleLowerCase().match(input)
        })
        listArray6 = listArray6.filter((i) => {
            return i.name.toLocaleLowerCase().match(input)
        })
        listArray7 = listArray7.filter((i) => {
            return i.name.toLocaleLowerCase().match(input)
        })
        listArray8 = listArray8.filter((i) => {
            return i.name.toLocaleLowerCase().match(input)
        })
        listArray9 = listArray9.filter((i) => {
            return i.name.toLocaleLowerCase().match(input)
        })
    }

    var data1 = listArray1.map((item, index) => {
        return(
            <ul>
                <li 
                    className="li-list"
                    onClick={() => handleList(item, index)}
                    key={index}>
                        {item.name}
                </li>
            </ul>
        )
    })
    var data2 = listArray2.map((item, index) => {
        return(
            <ul>
                <li 
                    className="li-list"
                    onClick={() => handleList(item, index)}
                    key={index}>
                        {item.name}
                </li>
            </ul>
        )
    })
    var data3 = listArray3.map((item, index) => {
        return(
            <ul>
                <li 
                    className="li-list"
                    onClick={() => handleList(item, index)}
                    key={index}>
                        {item.name}
                </li>
            </ul>
        )
    })
    var data4 = listArray4.map((item, index) => {
        return(
            <ul>
                <li 
                    className="li-list"
                    onClick={() => handleList(item, index)}
                    key={index}>
                        {item.name}
                </li>
            </ul>
        )
    })
    var data5 = listArray5.map((item, index) => {
        return(
            <ul>
                <li 
                    className="li-list"
                    onClick={() => handleList(item, index)}
                    key={index}>
                        {item.name}
                </li>
            </ul>
        )
    })
    var data6 = listArray6.map((item, index) => {
        return(
            <ul>
                <li 
                    className="li-list"
                    onClick={() => handleList(item, index)}
                    key={index}>
                        {item.name}
                </li>
            </ul>
        )
    })
    var data7 = listArray7.map((item, index) => {
        return(
            <ul>
                <li 
                    className="li-list"
                    onClick={() => handleList(item, index)}
                    key={index}>
                        {item.name}
                </li>
            </ul>
        )
    })
    var data8 = listArray8.map((item, index) => {
        return(
            <ul>
                <li 
                    className="li-list"
                    onClick={() => handleList(item, index)}
                    key={index}>
                        {item.name}
                </li>
            </ul>
        )
    })
    var data9 = listArray9.map((item, index) => {
        return(
            <ul>
                <li 
                    className="li-list"
                    onClick={() => handleList(item, index)}
                    key={index}>
                        {item.name}
                </li>
            </ul>
        )
    })

    const handleList = (item) => {
        // console.log(item)
        SetContentStyle("content-image-hidden")
        SetStyle("list-desc-content")
        SetBirthYear(
            <p className="desc-text">
                : {item.birth_year}
            </p>
        )
        SetEyeColor(
            <p className="desc-text">
                : {item.eye_color}
            </p>
        )
        SetHairColor(
            <p className="desc-text">
                : {item.hair_color}
            </p>
        )
        SetSkinColor(
            <p className="desc-text">
                : {item.skin_color}
            </p>
        )
        SetHeight(
            <p className="desc-text">
                : {item.height}
            </p>
        )
        SetMass(
            <p className="desc-text">
                : {item.mass}
            </p>
        )
        SetGender(
            <p className="desc-text">
                : {item.gender}
            </p>
        )
        SetName(
            <p className="desc-text">
                : {item.name}
            </p>
        )

        const displayImage = ImageFunc(item.name)
        if (displayImage === ImageFunc(item.name)) {
            SetImage(displayImage)
            SetImageClass("image")
        }

        SetCloseBtn("close-btn")
    }

    return (
        <div id="main-assigment">
            <div className="main-container">
                <div className="list-container">
                    <div className="section">
                        <div className="list-content">
                            <div className={contentStyle}/>
                            <div className="btn-cont">
                                <button
                                    onClick={handleCloseContent}
                                    className={closeBtn}>
                                    CLOSE
                                </button>
                            </div>
                            <div id="image-container">
                                <div>
                                    <List
                                        className={style}
                                        birthYear={birthYear} 
                                        eyeColor={eyeColor} 
                                        hairColor={hairColor} 
                                        skinColor={skinColor} 
                                        height={height} 
                                        mass={mass} 
                                        gender={gender} 
                                        name={name}
                                    />
                                </div>
                                <div className="image-flex">
                                    <img alt="" className={imageClass} src={image}/>
                                </div>
                            </div>
                        </div>
                        <div className="list-nav">
                            <button  
                                onClick={handleNavStart}
                                className="start">
                                Page {startCount}
                            </button>
                            <button 
                                onClick={handleNavNext}
                                className="next">
                                Page {nextCount}
                            </button>
                        </div>
                        <div className="list-text-container">
                            {dataArray.map((item, index) => {
                                return(
                                    <li key={index}>
                                        <p 
                                            onClick={() => handleClick(item, index)} 
                                            key={index}
                                            className="text">
                                            {item.name}
                                        </p>
                                    </li>
                                )
                            })}
                        </div>
                    </div>
                </div>
                <form>
                    <div className="search-content">
                        <input 
                            onChange={handleInput}
                            placeholder="Name?"
                            type="text"
                            value={input}
                            required
                        />
                    </div>
                </form>
                <div id="list-container">
                    <ListBox item={data1}/>
                    <ListBox item={data2}/>
                    <ListBox item={data3}/>
                    <ListBox item={data4}/>
                    <ListBox item={data5}/>
                    <ListBox item={data6}/>
                    <ListBox item={data7}/>
                    <ListBox item={data8}/>
                    <ListBox item={data9}/>
                </div>
            </div>
        </div>
    )
}

export default Assigment
