import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Chart } from 'chart.js';
import { skillLogos } from "../skills.mock";

@Component({
	selector: 'app-skills',
	templateUrl: './skills.component.html',
	styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
    	
	@ViewChild('skills') canvas : ElementRef
	public context: CanvasRenderingContext2D
	public chart: any
	public dataSet: any[]
	public loading: boolean;

	constructor() 
	{	                      
		this.dataSet = 
		[
			{
				data:
				[
					{
						x: -8,
						y: 8,
						r: 0
					},
					{
						x: 8,
						y: -8,
						r: 0
					},
				],
			},
		]

        this.doInitDataSet()
	}

	ngOnInit() 
	{
        this.context = (<HTMLCanvasElement>this.canvas.nativeElement).getContext('2d');

        this.chart = new Chart(this.context,
        {
            type: 'bubble',
            data:
            {
                datasets: this.dataSet
            },				
            options:
            {
                legend:
                {
                    display: false
                },
                scales:
                {
                    xAxes:
                    [
                        {
                            display: false
                        }
                    ],
                    yAxes: 
                    [
                        {
                            display: false
                        }
                    ],
                }
            }
        }); 
    }

    /**
     * Init all logo to a point 
     */
    doInitDataSet() 
    {
        skillLogos.forEach((logo,index,skills) => 
		{				
			let tmpImage = new Image()
			let resultImage = new Image()
            tmpImage.src = logo.src

            resultImage.onload = () =>
            {
                let ratio = this.calculateAspectRatioFit(tmpImage.width,tmpImage.height,100,80)
                resultImage.height = ratio.height
                resultImage.width = ratio.width
            }

            resultImage.src = logo.src

            let point = 
            {
                data:
                [
                    {
                        x: logo.x,
                        y: logo.y,
                        r: 5
                    },					
                ],
                pointStyle: resultImage
            }

            this.dataSet.push(point)
		});
    }

	 /**
	 * Conserve aspect ratio of the original region. Useful when shrinking/enlarging
	 * images to fit into a certain area.
	 *
	 * @param {Number} srcWidth width of source image
	 * @param {Number} srcHeight height of source image
	 * @param {Number} maxWidth maximum available width
	 * @param {Number} maxHeight maximum available height
	 * @return {Object} { width, height }
	 */
	calculateAspectRatioFit(srcWidth, srcHeight, maxWidth, maxHeight) 
	{
		var ratio = Math.min(maxWidth / srcWidth, maxHeight / srcHeight);

		return { width: srcWidth*ratio, height: srcHeight*ratio };
	}

}
